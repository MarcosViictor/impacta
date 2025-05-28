# views.py
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from users.models import Ong
from users.serializers.ongSerializers import OngSerializer

class OngListView(generics.ListAPIView):
    queryset = Ong.objects.all()
    serializer_class = OngSerializer

class OngDetailView(generics.RetrieveAPIView):
    queryset = Ong.objects.all()
    serializer_class = OngSerializer
    lookup_field = 'id'

    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except Ong.DoesNotExist:
            return Response(
                {"detail": "ONG não encontrada."},
                status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {"detail": f"Erro ao buscar dados da ONG: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )