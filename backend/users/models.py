from django.db import models

# Create your models here.


from django.contrib.auth.models import AbstractUser


class userType(models.TextChoices):
    ONG = 'ONG', 'ong'
    DONOR = 'DONOR', 'Doador'

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    user_type =  models.CharField(max_length=10,  choices= userType.choices)

    USERNAME_FIELD ='email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email