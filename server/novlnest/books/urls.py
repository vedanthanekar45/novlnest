from django.urls import path
from .views import *

urlpatterns = [
    path('search/', search_books, name='searchbooks')
]