from django.shortcuts import render
from rest_framework import serializers, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password, check_password
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import random
import json
from userauth1.models import *
from .sendVerificationMail import send_verification_mail

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

class CustomAuthToken(TokenObtainPairView):
    """
    Custom Authentication Token class that generates a JWT
    on successful authentication (checks username/password).
    """

    def post(self, request, *args, **kwargs):
        # Get username and password from the request
        username = request.data.get('username')
        password = request.data.get('password')

        # Authenticate the user
        user = User.objects.filter(username=username).first()

        if user and user.check_password(password):
            # Generate JWT tokens using SimpleJWT
            refresh = RefreshToken.for_user(user)
            access_token = refresh.access_token

            # Return the access and refresh tokens
            return Response({
                'access': str(access_token),
                'refresh': str(refresh),
            })

        # If authentication fails
        return Response({'error': 'Invalid credentials'}, status=401)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # Find the user by username
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        raise AuthenticationFailed('User not found')

    # Check if the provided password matches the stored hash
    if not check_password(password, user.password):
        raise AuthenticationFailed('Invalid password')

    # If the password is correct, proceed with token generation
    # Generate JWT token (you can use simplejwt or your custom method)
    from rest_framework_simplejwt.tokens import RefreshToken

    refresh = RefreshToken.for_user(user)
    return Response({
        'access': str(refresh.access_token),
        'refresh': str(refresh),
    })
    
@csrf_exempt
def send_email_view(request):
    if request.method == 'POST':
        try:
            # Parsing JSON data from Postman
            body_unicode = request.body.decode()
            data = json.loads(body_unicode)
            print(body_unicode)
            user_email = data.get("email")
            
            if not user_email:
                return JsonResponse({"error": "Email is required"}, status=400)
            
            otp = random.randint(100000, 999999)
            
            # Sending the verification email
            send_verification_mail(user_email, otp)
            return JsonResponse({"message": "OTP sent successfully"}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)