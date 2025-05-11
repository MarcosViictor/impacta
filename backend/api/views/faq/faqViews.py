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

        org_id = self.request.data.get('org_user')  # <- agora está no lugar certo!
        if not org_id:
            raise ValidationError("É necessário especificar a ONG (org_user).")

        from users.models import CustomUser
        try:
            org_user = CustomUser.objects.get(id=org_id, user_type=userType.ONG)
        except CustomUser.DoesNotExist:
            raise ValidationError("ONG não encontrada.")

        serializer.save(question_user=self.request.user, org_user=org_user)
