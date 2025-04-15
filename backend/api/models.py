from django.db import models
from django.utils.translation import gettext_lazy as _

class AvaliationStatus(models.TextChoices):
    ENU = 'EN', _('EN')  

class CartDonationUrgency(models.TextChoices):
    ENU = 'EN', _('EN')  

# Modelo Ong
class Ong(models.Model):
    name = models.CharField(max_length=30)
    cnpj = models.CharField(max_length=14, unique=True)
    mission = models.CharField(max_length=200)
    localization = models.CharField(max_length=50)
    type_performance = models.CharField(max_length=30)
    avaliation_stats = models.CharField(max_length=10, choices=AvaliationStatus.choices)
    date_criation = models.DateField()

    def __str__(self):
        return self.name

# Modelo Item
class Item(models.Model):
    name = models.CharField(max_length=30)
    category = models.CharField(max_length=20)

    def __str__(self):
        return self.name

# Modelo CartDonation
class CartDonation(models.Model):
    org_id = models.ForeignKey(Ong, on_delete=models.CASCADE, related_name='cart_donations')
    item_id = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='cart_donations')
    total_quantity = models.IntegerField()
    remaining_quantity = models.IntegerField()
    urgency = models.CharField(max_length=10, choices=CartDonationUrgency.choices)

    def __str__(self):
        return f"CartDonation {self.id} - {self.org_id.name}"

# Modelo Post
class Post(models.Model):
    # org_id = models.ForeignKey(Ong, on_delete=models.CASCADE, related_name='posts')
    image = models.URLField(max_length=200, blank=True, null=True)
    video = models.URLField(max_length=200, blank=True, null=True)
    description = models.CharField(max_length=100)

    def __str__(self):
        return f"Post {self.id}"

# Modelo Faq
class Faq(models.Model):
    org_id = models.ForeignKey(Ong, on_delete=models.CASCADE, related_name='faqs')
    questions = models.CharField(max_length=200)
    response_org = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"FAQ {self.id} - {self.org_id.name}"

# Modelo Donation (TEMPORÁRIO sem o User)
class Donation(models.Model):
    org_id = models.ForeignKey(Ong, on_delete=models.CASCADE, related_name='donations')
    item_id = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='donations')
    id_donor = models.IntegerField()  # Temporário até o User ser implementado
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Donation {self.id} - {self.org_id.name}"

# Modelo Avaliation (TEMPORÁRIO sem o User)
class Avaliation(models.Model):
    org_id = models.ForeignKey(Ong, on_delete=models.CASCADE, related_name='avaliations')
    id_donor = models.IntegerField()  # Temporário até o User ser implementado
    comment = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Avaliation {self.id} - {self.org_id.name}"
