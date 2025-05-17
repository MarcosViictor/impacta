from rest_framework import serializers
from api.models import Accountability

class AccountabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Accountability
        fields = ['id', 'org', 'title', 'description', 'image', 'created_at']