from rest_framework import serializers
from api.models import Item, Necessity
from api.serializers.ItemSerializers import ItemSerializers

class NecessitySerializers(serializers.ModelSerializer):
    item = ItemSerializers(read_only=True)
    item_id = serializers.PrimaryKeyRelatedField(queryset=Item.objects.all(), source='item', write_only=True)

    class Meta:
        model = Necessity
        fields = ['id', 'org', 'item', 'item_id', 'quantity', 'urgency', 'status', 'created_at']