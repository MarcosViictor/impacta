from rest_framework import viewsets
from api.models import Donation
from api.serializers.DonationsSerializers import DonationSerializer
# from donations.permissions import IsDonorUser
from rest_framework.permissions import IsAuthenticated
import logging

logger = logging.getLogger('api')

class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    # permission_classes = [IsAuthenticated, IsDonorUser]

    def get_queryset(self):
        user = self.request.user
        logger.info(f"Usuário {user} acessou a lista de doações.")
        return Donation.objects.filter(donor=user)

    def perform_create(self, serializer):
        user = self.request.user
        logger.info(f"Usuário {user} realizou uma nova doação.")
        serializer.save(donor=user)
