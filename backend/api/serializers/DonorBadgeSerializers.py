from rest_framework import serializers
from api.models import DonorBadge
from api.serializers.BadgeSerializers import BadgeSerializers

class DonorBadgeSerializers(serializers.ModelSerializer):
    badge = BadgeSerializers(read_only=True)

    class Meta:
        model = DonorBadge
        fields = ['id', 'donor', 'badge', 'date_awarded']
