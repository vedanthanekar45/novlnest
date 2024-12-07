from django.db import models

# Create your models here.
class user (models.Model):
    username = models.CharField(max_length=20)
    age = models.IntegerField()
    email = models.EmailField()