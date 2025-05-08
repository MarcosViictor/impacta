from django.db import models
from django.utils.translation import gettext_lazy as _
from users.models import CustomUser, Ong, userType

class Item(models.Model):
    name = models.CharField(max_length=30)
    category = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Donation(models.Model):
    org = models.ForeignKey(Ong, on_delete=models.CASCADE, related_name='received_donations')
    item = models.ForeignKey(Item, on_delete=models.SET_NULL, null=True, related_name='donations')
    donor = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name='made_donations')
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Donation {self.id} - {self.org.name}"

class Avaliation(models.Model):
    org = models.ForeignKey(Ong, on_delete=models.CASCADE, related_name='avaliations')
    donor = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name='avaliations')
    comment = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Avaliation {self.id} - {self.org.name}"

class Post(models.Model):
    org_user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='posts')
    image = models.URLField(max_length=200, blank=True, null=True)
    video = models.URLField(max_length=200, blank=True, null=True)
    description = models.CharField(max_length=100)

    def __str__(self):
        return f"Post {self.id}"

    def save(self, *args, **kwargs):
        if self.org_user.user_type != userType.ONG:
            raise ValueError("Apenas ONGs podem criar posts.")
        super().save(*args, **kwargs)

class Faq(models.Model):
    question_user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='questions')
    org_user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='answers')
    question = models.CharField(max_length=200)
    answer = models.TextField(null=True, blank=True)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"FAQ {self.id} - Pergunta de {self.question_user} para {self.org_user}"

    def save(self, *args, **kwargs):
        if self.question_user.user_type != userType.DONOR:
            raise ValueError("Apenas doadores podem enviar perguntas.")
        if self.org_user.user_type != userType.ONG:
            raise ValueError("Apenas ONGs podem ser responsáveis pela resposta.")
        super().save(*args, **kwargs)