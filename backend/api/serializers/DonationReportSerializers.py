from rest_framework import serializers
from api.models import DonationReport

class DonationReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationReport
        fields = ['id', 'donation', 'confirmed', 'message', 'created_at']