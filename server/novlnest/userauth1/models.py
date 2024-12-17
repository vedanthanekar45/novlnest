from django.db import models

# Create your models here.
class User (models.Model):
    fullName = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=100)
    isVerified = models.BooleanField(default=False)
    
    def __str__(self) -> str:
        return self.username