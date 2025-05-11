from rest_framework import serializers
from api.models import Donation, Item
from api.serializers.ItemSerializers import ItemSerializers



class DonationSerializer(serializers.ModelSerializer):
    item = ItemSerializers(read_only=True)
    item_id = serializers.PrimaryKeyRelatedField(queryset=Item.objects.all(), source='item', write_only=True)

    class Meta:
        model = Donation
        fields = ['id', 'org', 'item', 'item_id', 'donor', 'date']