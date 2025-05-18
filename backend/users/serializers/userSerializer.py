from rest_framework import serializers
from users.models import CustomUser
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password', 'password2', 'user_type')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "As senhas não coincidem."})
        
        # Uiitilizar bruteforce para testar a senha
        try:
            print(f"Validando senha: {attrs['password']}")  # Debug
            user = CustomUser(
                username=attrs.get('username', ''),
                email=attrs.get('email', ''),
                first_name=attrs.get('first_name', ''),
                last_name=attrs.get('last_name', '')
            )
            validate_password(attrs['password'], user=user)
            print("Senha válida")  # Debug
        except ValidationError as e:
            print(f"Erro de validação: {e.messages}")  # Debug
            raise serializers.ValidationError({"password": list(e.messages)})
            
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        user = CustomUser.objects.create_user(**validated_data)
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'username', 'first_name', 'last_name', 'user_type')
        read_only_fields = ('id', 'email', 'user_type')  # Campos que não podem ser alterados

class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    new_password2 = serializers.CharField(required=True)

    def validate(self, attrs):
        if attrs['new_password'] != attrs['new_password2']:
            raise serializers.ValidationError({"new_password": "As senhas não coincidem."})
        
        # Validação de força de senha
        try:
            validate_password(attrs['new_password'])
        except ValidationError as e:
            raise serializers.ValidationError({"new_password": list(e.messages)})
            
        return attrs

