from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from api.models import Faq
from api.serializers.faqSerializer import faqSerializer
from users.models import userType


class FaqViewsSet(viewsets.ModelViewSet):
    queryset = Faq.objects.all()
    serializer_class = faqSerializer

    def perform_create(self, serializer):
        if not self.request.user.is_authenticated:
            raise ValidationError("Usuário não autenticado.")
        if self.request.user.user_type != userType.DONOR:
            raise ValidationError("Apenas doadores podem enviar perguntas.")
        serializer.save(question_user=self.request.user)

    def perform_update(self, serializer):
        if not self.request.user.is_authenticated:
            raise ValidationError("Usuário não autenticado.")
        if self.request.user.user_type != userType.ONG:
            raise ValidationError("Apenas ONGs podem responder FAQs.")
        if self.request.user != self.get_object().org_user:
            raise ValidationError("Você só pode responder FAQs destinadas à sua ONG.")
        serializer.save()