from django.shortcuts import render
from rest_framework import serializers, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from userauth1.models import *

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