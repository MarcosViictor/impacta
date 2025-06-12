from rest_framework import serializers
from api.models import Badge

class BadgeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = ['name', 'description', 'icon']