from django import forms
from .models import Avaliation

class AvaliationForm(forms.ModelForm):
    class Meta:
        model = Avaliation
        fields = ['org_id', 'id_donor', 'comment']
