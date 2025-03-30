from django.db import models
from django.contrib.auth.models import AbstractUser


class Users(AbstractUser):
    Type_Users = [
        ('D', 'donator',),
        ('O', 'Ong')
    ]

    phone = models.CharField(max_length=20, blank= True)
    profilePicture = models.URLField(blank=True, null=True)
    typeUser = models.CharField(max_length= 1, choices= Type_Users)
    registerdate = models.DateTimeField(auto_now_add=True)
    updateDate = models.DateTimeField(auto_now= True)


    # Specific fields for ong users 
    mision = models.CharField(max_length= 200, blank= True)
    location = models.CharField(max_length= 50, blank= True)
    cep = models.CharField(max_length= 50, blank= True)
    typePerformance = models.CharField(max_length= 200, blank= True)
    idAdmOng = models.IntegerField(blank=True, null=True)

    # Specific fields for ongs donators 
    avaliations = models.JSONField(blank=True, null=True)

    def __str__(self):
        return f"{self.get_TypeUser_display()}: {self.email}"
    
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

