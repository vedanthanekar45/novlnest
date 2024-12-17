"""
URL configuration for novlnest project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.urls import path, re_path, include
from django.contrib.staticfiles.views import serve
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
import books.urls
from userauth1.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/books/', include(books.urls)),
    path('api/protected/', protected_view, name='protected'),
    path('api/register/', register, name='register'),
    path('api/user/', get_user_details, name='get_user_details'),
    path('api/login/', CustomAuthToken.as_view(), name='api-login'),
    
    # API endpoint to test whether OTP is being sent successfully or not
    path('api/send-otp/', send_email_view, name="send-otp"),
    
    path('api/token/', TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name='index.html')),
] # + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
