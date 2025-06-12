from rest_framework import serializers
from users.models import CustomUser, Ong, userType
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)
    # Campos adicionais para ONG
    ong_name = serializers.CharField(write_only=True, required=False)
    ong_description = serializers.CharField(write_only=True, required=False)
    # Campos de localização
    city = serializers.CharField(required=True)
    state = serializers.CharField(required=True, max_length=2)
    address = serializers.CharField(required=True)
    postal_code = serializers.CharField(required=True)

    class Meta:
        model = CustomUser
        fields = (
            'email', 'username', 'password', 'password2', 'user_type',
            'ong_name', 'ong_description', 'city', 'state', 'address',
            'postal_code', 'first_name', 'last_name'
        )

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "As senhas não coincidem."})
        
        # Validar tipo de usuário
        user_type = attrs.get('user_type')
        if user_type not in [choice[0] for choice in userType.choices]:
            raise serializers.ValidationError({
                "user_type": f"Tipo de usuário inválido. Deve ser um dos seguintes: {', '.join([choice[0] for choice in userType.choices])}"
            })
        
        # Validar campos da ONG se o usuário for do tipo ONG
        if user_type == userType.ONG:
            if not attrs.get('ong_name'):
                raise serializers.ValidationError({"ong_name": "O nome da ONG é obrigatório."})
        
        try:
            user = CustomUser(
                username=attrs.get('username', ''),
                email=attrs.get('email', ''),
                first_name=attrs.get('first_name', ''),
                last_name=attrs.get('last_name', '')
            )
            validate_password(attrs['password'], user=user)
        except ValidationError as e:
            raise serializers.ValidationError({"password": list(e.messages)})
            
        return attrs

    def create(self, validated_data):
        # Remover campos extras
        ong_name = validated_data.pop('ong_name', None)
        ong_description = validated_data.pop('ong_description', None)
        validated_data.pop('password2')
        
        # Criar usuário
        user = CustomUser.objects.create_user(**validated_data)
        
        # Se for ONG, criar o perfil da ONG
        if user.user_type == userType.ONG and ong_name:
            Ong.objects.create(
                user=user,
                name=ong_name,
                description=ong_description or ''
            )
        
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = (
            'id', 'email', 'username', 'first_name', 'last_name', 'user_type',
            'city', 'state', 'country', 'address', 'postal_code'
        )
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

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['user_type'] = user.user_type  # Adiciona o tipo de usuário ao token
        return token

