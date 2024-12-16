from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate

class CustomAuthToken(JWTAuthentication):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            raise AuthenticationFailed('Username and password are required')

        # Django's authenticate method will handle the password comparison
        user = authenticate(request, username=username, password=password)

        if user is None:
            raise AuthenticationFailed('Invalid username or password')

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        return {
            'access': access_token,
            'refresh': str(refresh),
        }
