from rest_framework import serializers
from api.models import PaymentInfo


class PaymentInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentInfo
        fields = ['id', 'org', 'pix_key', 'bank', 'agency', 'account', 'qr_code_image']