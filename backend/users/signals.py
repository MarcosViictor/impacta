from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import CustomUser, Ong

# @receiver(post_save, sender=CustomUser)
# def create_ong_profile(sender, instance, created, **kwargs):
#     if created and instance.user_type == 'ONG':
#         Ong.objects.create(user=instance, name='Nome padrão da ONG')
