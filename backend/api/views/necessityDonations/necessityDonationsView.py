from rest_framework.exceptions import ValidationError  
from rest_framework import viewsets
from api.models import Necessity
from api.serializers.NecessitySerializers import NecessityCreateUpdateSerializer, NecessitySerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
import logging

logger = logging.getLogger('api')

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
            logger.info(f"ONG {user.ong_profile} acessou suas necessidades.")
            return Necessity.objects.filter(org=user.ong_profile)
        logger.warning(f"Usuário {user} tentou acessar necessidades sem perfil de ONG.")
        return Necessity.objects.none()

    def perform_create(self, serializer):
        user = self.request.user
        if not hasattr(user, 'ong_profile'):
            logger.warning(f"Usuário {user} tentou criar necessidade sem estar associado a uma ONG.")
            raise ValidationError({"detail": "Usuário não está associado a uma ONG."})
        logger.info(f"ONG {user.ong_profile} criou uma nova necessidade.")
        serializer.save(org=user.ong_profile)
