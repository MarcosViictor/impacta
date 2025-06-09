from rest_framework import viewsets
from api.models import PaymentInfo
from api.serializers.PaymentinfoSerializers import PaymentInfoSerializer
# from donations.permissions import IsOngUser
from rest_framework.permissions import IsAuthenticated
import logging

logger = logging.getLogger('api')

class PaymentInfoViewSet(viewsets.ModelViewSet):
    queryset = PaymentInfo.objects.all()
    serializer_class = PaymentInfoSerializer
    # permission_classes = [IsAuthenticated, IsOngUser]

    def get_queryset(self):
        user = self.request.user
        logger.info(f"Usuário {user} acessou as informações de pagamento.")
        return PaymentInfo.objects.filter(org=user)

    def perform_create(self, serializer):
        user = self.request.user
        logger.info(f"Usuário {user} criou uma nova informação de pagamento.")
        serializer.save(org=user)
