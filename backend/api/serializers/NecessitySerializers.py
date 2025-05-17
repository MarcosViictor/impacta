from rest_framework import serializers
from api.models import Item, Necessity
from users.models import Ong
from api.serializers.ItemSerializers import ItemSerializers


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name']

class OngSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ong
        fields = ['id', 'name']

class NecessitySerializer(serializers.ModelSerializer):
    org_name = serializers.ReadOnlyField(source='org.name')
    item_name = serializers.ReadOnlyField(source='item.name')
    
    class Meta:
        model = Necessity
        fields = ['id', 'org', 'org_name', 'item', 'item_name', 'quantity', 
                 'urgency', 'status', 'created_at']
        read_only_fields = ['created_at']
    
    def validate_quantity(self, value):
        if value <= 0:
            raise serializers.ValidationError("A quantidade deve ser maior que zero.")
        return value

class NecessityCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Necessity
        fields = ['item', 'quantity', 'urgency', 'status']
    
    def validate_quantity(self, value):
        if value <= 0:
            raise serializers.ValidationError("A quantidade deve ser maior que zero.")
        return value