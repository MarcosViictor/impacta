from rest_framework import serializers
from api.models import Faq
from api.models import Ong
from users.models import userType
class faqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = ['id', 'question_user', 'org_user', 'question', 'answer', 'date']
        read_only_fields = ['question_user',  'org_user', 'date']  

    def validate_question(self, value):
        if not value.strip():
            raise serializers.ValidationError("A pergunta não pode estar em branco.")
        return value
    
    def perform_update(self, serializer):
        
        if not self.request.user.is_authenticated:
            raise ValidationError("Usuário não autenticado.")
        if self.request.user.user_type != userType.ONG:
            raise ValidationError("Apenas ONGs podem responder FAQs.")
        
        faq = self.get_object()

        if self.request.user != faq.org_user:
            raise ValidationError("Você só pode responder FAQs destinadas à sua ONG.")
        serializer.save()

    def validate(self, data):
        if self.instance:  
            request = self.context.get('request')
            if request and request.user.user_type != userType.ONG:
                raise serializers.ValidationError("Apenas ONGs podem responder FAQs.")
            if request and request.user != self.instance.org_user:
                raise serializers.ValidationError("Você só pode responder FAQs destinadas à sua ONG.")
        return data