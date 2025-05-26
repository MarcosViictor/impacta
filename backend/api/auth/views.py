from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from core.log_manager import log_manager

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if not username or not password:
            log_manager.warning(
                "Tentativa de login sem credenciais completas",
                ip=request.META.get('REMOTE_ADDR')
            )
            return Response(
                {"error": "Credenciais incompletas"},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = authenticate(username=username, password=password)
        
        if user is None:
            log_manager.warning(
                "Tentativa de login com credenciais inválidas",
                username=username,
                ip=request.META.get('REMOTE_ADDR')
            )
            return Response(
                {"error": "Credenciais inválidas"},
                status=status.HTTP_401_UNAUTHORIZED
            )

        try:
            refresh = RefreshToken.for_user(user)
            log_manager.info(
                "Login realizado com sucesso",
                user_id=str(user.id),
                username=username
            )
            
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            })
            
        except Exception as e:
            log_manager.error(
                "Erro ao gerar token de autenticação",
                user_id=str(user.id),
                error=str(e)
            )
            return Response(
                {"error": "Erro ao processar login"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            ) 