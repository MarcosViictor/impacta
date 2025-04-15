# avaliacao/serializers.py
from rest_framework import serializers
from .models import Avaliation

class AvaliationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avaliation
        fields = ['id', 'org_id', 'id_donor', 'comment', 'date']
