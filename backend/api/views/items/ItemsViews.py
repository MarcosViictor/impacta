from rest_framework import viewsets, permissions
from api.models import Item
from api.serializers.ItemSerializers import ItemSerializers
import logging

logger = logging.getLogger('api')

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializers
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        logger.info(f"Usuário {user} acessou a lista de itens.")
        return super().get_queryset()

    def perform_create(self, serializer):
        user = self.request.user
        logger.info(f"Usuário {user} criou um novo item.")
        serializer.save()

