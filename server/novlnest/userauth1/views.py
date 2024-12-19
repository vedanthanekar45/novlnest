from django.shortcuts import render
from rest_framework import serializers, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password, check_password
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.cache import cache
from django.contrib.auth import authenticate
import random
import json
from userauth1.models import *
from .sendVerificationMail import send_verification_mail
import logging

logger = logging.getLogger(__name__)

@api_view(['GET'])
def protected_view(request):
    return Response({'message': 'This is a protected view!'}, status=200)

class UserSerializer(serializers.Serializer):
    fullName = serializers.CharField(max_length=100)
    email = serializers.CharField()
    username = serializers.CharField(max_length=20)
    password = serializers.CharField(write_only=True, max_length=15)
    
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            fullName = serializer.validated_data['fullName']
            email = serializer.validated_data['email']
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
        
            # Hashing the password
            hashed_password = make_password(password)
            
            # Creating a user object
            user = User.objects.create(fullName=fullName, email=email, username=username, password=hashed_password)
            user.save()
            
            return Response({
                "message": "User Created Successfully",
            }, status = status.HTTP_201_CREATED)    
        
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_details(request):
    user = request.user
    user_data = {
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "full_name": user.get_full_name(),
    }
    return Response(user_data)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        try:
            user = User.objects.get(username=username)
            if not check_password(password, user.password):
                return Response({'error': 'Invalid password'}, status=status.HTTP_401_UNAUTHORIZED)
            
            refresh = RefreshToken.for_user(user)
            access = refresh.access_token
            response = JsonResponse({
                'access': str(refresh.access_token),
                'refresh': str(refresh)
            }, status = status.HTTP_200_OK)
            
            response.set_cookie(
                'access', str(access),
                httponly=True,
                secure=True,
                samesite='Strict'
            )
            response.set_cookie(
                'access', str(refresh),
                httponly=True,
                secure=True,
                samesite='Strict'
            )
            
            return response
            
        except User.DoesNotExist:
            return Response({'error': 'Invalid email'}, status=status.HTTP_404_NOT_FOUND)

# View to send OTP through Email
@csrf_exempt
def send_email_view(request):
    if request.method == 'POST':
        try:
            # Parsing JSON data from Postman
            data = json.loads(request.body)
            user_email = data.get("email")
            
            if not user_email:
                return JsonResponse({"error": "Email is required"}, status=400)
            
            otp = random.randint(100000, 999999)
            cache.set(user_email, str(otp), timeout=600)
            
            # Sending the verification email
            send_verification_mail(user_email, otp)
            return JsonResponse({"message": "OTP sent successfully"}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

# View to verify the OTP from email
class VerifyOTPView (APIView):
    def post (self, request):
        
        email = request.data.get('email')
        otp = request.data.get('otp')
        print(f"Email received for verification: {email}")
        print(f"OTP received for verification: {otp}")
        
        if not email or not otp:
            return Response({'error': 'Email and OTP are required'}, status=status.HTTP_400_BAD_REQUEST)
        
        cached_otp = cache.get(email)
        if cached_otp is None:
            return Response({'error': 'OTP has expired. Please request a new one.'}, status=status.HTTP_400_BAD_REQUEST)
        
        print("OTP:", cached_otp)
        if str(cached_otp) == str(otp):
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
            
            user.isVerified = True
            user.save()
            
            refresh = RefreshToken.for_user(user)
            access = refresh.access_token

            response = JsonResponse({
                'message': 'Verification successful',
                'access': str(access),
                'refresh': str(refresh)
            }, status=status.HTTP_200_OK)
            
            response.set_cookie(
                'access', str(access),
                httponly=True,
                secure=True,
                samesite='Strict'
            )
            response.set_cookie(
                'access', str(refresh),
                httponly=True,
                secure=True,
                samesite='Strict'
            )
            
            return response
        
        return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)