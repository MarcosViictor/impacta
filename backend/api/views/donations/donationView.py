from rest_framework import viewsets
from api.models import Donation
from api.serializers.DonationsSerializers import DonationSerializer
# from donations.permissions import IsDonorUser
from rest_framework.permissions import IsAuthenticated

class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    # permission_classes = [IsAuthenticated, IsDonorUser]

    def get_queryset(self):
        return Donation.objects.filter(donor=self.request.user)

    def perform_create(self, serializer):
        serializer.save(donor=self.request.user)
