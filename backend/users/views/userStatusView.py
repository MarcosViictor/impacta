from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class UserStatusView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            'detail': 'Usuário autenticado',
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'user_type': user.user_type,
        }) 