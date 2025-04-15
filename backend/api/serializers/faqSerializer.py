from rest_framework import serializers
from api.models import Faq
from api.models import Ong



class faqSerializer(serializers.ModelSerializer):
    model = Faq
    fields = [
        'id',
        'questions',
        'response_org',
        'date'
    ]

    def validate(self, data):
        if not data.get('questions') and not data.get('response_org'):
            raise serializers.ValidationError("At least one of the question,response_org fields must be filled in")
        return data