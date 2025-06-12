from rest_framework import viewsets
from api.models import Accountability
from api.serializers.AcountabilitySerializers import AccountabilitySerializer
# from api.permissions import IsOngUser
from rest_framework.permissions import IsAuthenticated

class AccountabilityViewSet(viewsets.ModelViewSet):
    queryset = Accountability.objects.all()
    serializer_class = AccountabilitySerializer
    # permission_classes = [IsAuthenticated, IsOngUser]

    def get_queryset(self):
        return Accountability.objects.filter(org=self.request.user)

    def perform_create(self, serializer):
        serializer.save(org=self.request.user)
