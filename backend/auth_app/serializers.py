from rest_framework import serializers
from django.contrib.auth import get_user_model
# from .models import Post
from auth_app.models import CustomUser

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name', 'phone', 'address', 'profile_image')
        extra_kwargs = {
            'password': {'write_only': True, 'min_length': 8},  # Força da senha
        }

    def create(self, validated_data):
        # Criptografa a senha antes de salvar
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user