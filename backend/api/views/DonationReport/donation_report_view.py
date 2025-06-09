from rest_framework import viewsets
from api.models import DonationReport
from api.serializers.DonationReportSerializers import DonationReportSerializer
# from api.permissions import IsOngUser
from rest_framework.permissions import IsAuthenticated
import logging

logger = logging.getLogger('api')


class DonationReportViewSet(viewsets.ModelViewSet):
    queryset = DonationReport.objects.all()
    serializer_class = DonationReportSerializer
    # permission_classes = [IsAuthenticated, IsOngUser]
    
    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            logger.info(f"Usuário {user} acessou os relatórios de doação.")
            return DonationReport.objects.filter(donation__ong=user)
        logger.warning("Tentativa de acesso não autenticado aos relatórios de doação.")
        return DonationReport.objects.none()  # Retorna queryset vazio se não estiver autenticado

    def perform_create(self, serializer):
        user = self.request.user
        logger.info(f"Usuário {user} criou um novo relatório de doação.")
        serializer.save()
