from django.db import models
from django.utils.translation import gettext_lazy as _
from users.models import CustomUser, Ong, userType

class Item(models.Model):
    name = models.CharField(max_length=30)
    category = models.CharField(max_length=20)
    quantity = models.IntegerField()

    def __str__(self):
        return self.name

class Donation(models.Model):
    org = models.ForeignKey(Ong, on_delete=models.CASCADE, related_name='received_donations')
    item = models.ForeignKey(Item, on_delete=models.SET_NULL, null=True, related_name='donations')
    donor = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name='made_donations')
    date = models.DateField(auto_now_add=True)
    quantity = models.IntegerField()
    status = models.CharField(max_length=20, choices=[
        ('pendente', 'Pendente'),
        ('confirmada', 'Confirmada'),
        ('recusada', 'Recusada'),
    ], default='pendente')

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
    image = models.ImageField(upload_to='posts/', blank=True, null=True)
    video = models.URLField(max_length=200, blank=True, null=True)
    description = models.CharField(max_length=100)

    def __str__(self):
        return f"Post {self.id}"

    def save(self, *args, **kwargs):
        if self.org_user.user_type != userType.ONG:
            raise ValueError("Apenas ONGs podem criar posts.")
        super().save(*args, **kwargs)

class Faq(models.Model):
    org_user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='faqs')
    question = models.CharField(max_length=200)
    answer = models.TextField(null=True, blank=True)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"FAQ {self.id} - {self.org_user}"

    def save(self, *args, **kwargs):
        if self.org_user.user_type != userType.ONG:
            raise ValueError("Apenas ONGs podem criar perguntas e respostas no FAQ.")
        super().save(*args, **kwargs)

class Necessity(models.Model):
    URGENCY_CHOICES = [
        ('baixa', 'Baixa'),
        ('media', 'Média'),
        ('alta', 'Alta'),
    ]

    STATUS_CHOICES = [
        ('pendente', 'Pendente'),
        ('parcial', 'Parcialmente Atendida'),
        ('completa', 'Completamente Atendida'),
    ]

    org = models.ForeignKey(Ong, on_delete=models.CASCADE, related_name='necessities')
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    urgency = models.CharField(max_length=10, choices=URGENCY_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pendente')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.item.name} - {self.org.name}"

# --- Informações de pagamento da ONG ---
class PaymentInfo(models.Model):
    org = models.OneToOneField(Ong, on_delete=models.CASCADE, related_name='payment_info')
    pix_key = models.CharField(max_length=100, blank=True, null=True)
    bank = models.CharField(max_length=100, blank=True)
    agency = models.CharField(max_length=20, blank=True)
    account = models.CharField(max_length=20, blank=True)
    qr_code_image = models.ImageField(upload_to='qr_codes/', blank=True, null=True)

    def __str__(self):
        return f"Pagamento - {self.org.name}"

class DonationReport(models.Model):
    donation = models.ForeignKey(Donation, on_delete=models.CASCADE, related_name='reports')
    confirmed = models.BooleanField(default=False)
    message = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Doação #{self.donation.id} confirmada? {'Sim' if self.confirmed else 'Não'}"

class Accountability(models.Model):
    org = models.ForeignKey(Ong, on_delete=models.CASCADE, related_name='accountabilities')
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='accountability/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Prestação de Contas - {self.title}"

# --- Emblemas para gamificação (doadores) ---
class Badge(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    icon = models.ImageField(upload_to='badges/')

    def __str__(self):
        return self.name

class DonorBadge(models.Model):
    donor = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='badges')
    badge = models.ForeignKey(Badge, on_delete=models.CASCADE)
    date_awarded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.donor} - {self.badge.name}"
