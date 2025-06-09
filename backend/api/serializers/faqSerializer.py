from rest_framework import serializers
from api.models import Faq
from users.models import userType

class faqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = ['id', 'org_user', 'question', 'answer', 'date']
        read_only_fields = ['org_user', 'date']

    def validate_question(self, value):
        if not value.strip():
            raise serializers.ValidationError("A pergunta não pode estar em branco.")
        return value

    def validate(self, data):
        request = self.context.get('request')
        if request and request.user.user_type != userType.ONG:
            raise serializers.ValidationError("Apenas ONGs podem criar ou responder FAQs.")
        return data

    def create(self, validated_data):
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            validated_data['org_user'] = request.user
        return super().create(validated_data)