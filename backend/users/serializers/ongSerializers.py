# serializers.py
from rest_framework import serializers
from users.models import Ong

class OngSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ong
        fields = '__all__'