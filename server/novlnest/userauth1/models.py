from django.db import models

# Create your models here.
class User (models.Model):
    username = models.CharField(max_length=20, unique=True)
    firstName = models.CharField(default = 'nan', max_length=50)
    lastName = models.CharField(default = 'nan', max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(default = 'nan', max_length=15)
    
    def __str__(self) -> str:
        return self.username