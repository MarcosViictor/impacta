from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from api.models import Faq
from api.serializers.faqSerializer import faqSerializer

class FaqViewsSet(viewsets.ModelViewSet):
    queryset = Faq.objects.all()
    serializer_class = faqSerializer

    def perform_create(self, serializer):
        serializer.save() 
