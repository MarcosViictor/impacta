from rest_framework import viewsets
from api.models import DonationReport
from api.serializers.DonationReportSerializers import DonationReportSerializer
# from api.permissions import IsOngUser
from rest_framework.permissions import IsAuthenticated


class DonationReportViewSet(viewsets.ModelViewSet):
    queryset = DonationReport.objects.all()
    serializer_class = DonationReportSerializer
    # permission_classes = [IsAuthenticated, IsOngUser]
    
    def get_queryset(self):
        # Corrigindo de donation__org para donation__ong
        # E adicionando verificação se o usuário está autenticado
        if self.request.user.is_authenticated:
            return DonationReport.objects.filter(donation__ong=self.request.user)
        return DonationReport.objects.none()  # Retorna queryset vazio se não estiver autenticado
