from rest_framework import serializers
from api.models import Item

class ItemSerializers(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'category']