from rest_framework import serializers
from api.models import Faq
from api.models import Ong
from users.models import userType
class faqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = ['id', 'question_user', 'org_user', 'question', 'answer', 'date']
        read_only_fields = ['question_user', 'org_user', 'question', 'date']  # Protege todos exceto answer

    def validate(self, data):
        # Em atualizações, verifica se o usuário é a ONG associada
        if self.instance:  # Modo atualização
            request = self.context.get('request')
            if request and request.user.user_type != userType.ONG:
                raise serializers.ValidationError("Apenas ONGs podem responder FAQs.")
            if request and request.user != self.instance.org_user:
                raise serializers.ValidationError("Você só pode responder FAQs destinadas à sua ONG.")
        return data