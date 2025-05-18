# views.py
from rest_framework import generics
from users.models import Ong
from users.serializers.ongSerializers import OngSerializer

class OngListView(generics.ListAPIView):
    queryset = Ong.objects.all()
    serializer_class = OngSerializer

class OngDetailView(generics.RetrieveAPIView):
    queryset = Ong.objects.all()
    serializer_class = OngSerializer
    lookup_field = 'id'