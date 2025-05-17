from rest_framework.exceptions import ValidationError  
from rest_framework import viewsets
from api.models import Necessity
from api.serializers.NecessitySerializers import NecessityCreateUpdateSerializer, NecessitySerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied

class NecessityViewSet(viewsets.ModelViewSet):
    queryset = Necessity.objects.all()
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return NecessityCreateUpdateSerializer
        return NecessitySerializer

    def get_queryset(self):
        user = self.request.user
        if hasattr(user, 'ong_profile'):
            return Necessity.objects.filter(org=user.ong_profile)
        return Necessity.objects.none()

    def perform_create(self, serializer):
        user = self.request.user
        if not hasattr(user, 'ong_profile'):
            raise ValidationError({"detail": "Usuário não está associado a uma ONG."})
        serializer.save(org=user.ong_profile)
