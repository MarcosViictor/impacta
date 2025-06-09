from rest_framework import viewsets
from api.models import Accountability
from api.serializers.AcountabilitySerializers import AccountabilitySerializer
# from api.permissions import IsOngUser
from rest_framework.permissions import IsAuthenticated
import logging

logger = logging.getLogger('api')

class AccountabilityViewSet(viewsets.ModelViewSet):
    queryset = Accountability.objects.all()
    serializer_class = AccountabilitySerializer
    # permission_classes = [IsAuthenticated, IsOngUser]

    def get_queryset(self):
        user = self.request.user
        logger.info(f"Usuário {user} acessou a lista de prestações de contas.")
        return Accountability.objects.filter(org=user)

    def perform_create(self, serializer):
        user = self.request.user
        logger.info(f"Usuário {user} criou uma nova prestação de contas.")
        serializer.save(org=user)
