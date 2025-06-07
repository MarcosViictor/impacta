from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from api.models import Faq
from api.serializers.faqSerializer import faqSerializer
from users.models import userType


class FaqViewsSet(viewsets.ModelViewSet):
    queryset = Faq.objects.all()
    serializer_class = faqSerializer

    def perform_create(self, serializer):
        if not self.request.user.is_authenticated:
            raise ValidationError("Usuário não autenticado.")
        if self.request.user.user_type != userType.ONG:
            raise ValidationError("Apenas ONGs podem criar perguntas e respostas no FAQ.")
        serializer.save(org_user=self.request.user)
