from rest_framework import viewsets
from api.models import PaymentInfo
from api.serializers.PaymentinfoSerializers import PaymentInfoSerializer
# from donations.permissions import IsOngUser
from rest_framework.permissions import IsAuthenticated

class PaymentInfoViewSet(viewsets.ModelViewSet):
    queryset = PaymentInfo.objects.all()
    serializer_class = PaymentInfoSerializer
    # permission_classes = [IsAuthenticated, IsOngUser]

    def get_queryset(self):
        return PaymentInfo.objects.filter(org=self.request.user)

    def perform_create(self, serializer):
        serializer.save(org=self.request.user)
