
from rest_framework import viewsets, permissions
from api.models import Item
from api.serializers.ItemSerializers import ItemSerializers

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializers
    permission_classes = [permissions.IsAuthenticated] 

