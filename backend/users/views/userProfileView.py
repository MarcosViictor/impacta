from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from users.serializers.userSerializer import UserProfileSerializer, ChangePasswordSerializer

class UserProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get_object(self):
        return self.request.user

class ChangePasswordView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ChangePasswordSerializer

    def post(self, request, *args, **kwargs):
        user = request.user
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            if not user.check_password(serializer.validated_data['old_password']):
                return Response({"old_password": ["Senha incorreta."]}, status=status.HTTP_400_BAD_REQUEST)
            
            user.set_password(serializer.validated_data['new_password'])
            user.save()
            
            return Response({"detail": "Senha alterada com sucesso."}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 