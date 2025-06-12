from django.db import models
from django.contrib.auth.models import AbstractUser

class userType(models.TextChoices):
    ONG = 'ONG', 'ong'
    DONOR = 'DONOR', 'Doador'

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    user_type = models.CharField(max_length=10, choices=userType.choices)
    # Campos de localização
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    country = models.CharField(max_length=100, default='Brasil')
    address = models.CharField(max_length=200, blank=True, null=True)
    postal_code = models.CharField(max_length=20, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

class Ong(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='ong_profile')
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name