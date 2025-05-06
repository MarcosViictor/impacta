# users/views.py
from rest_framework import generics
from users.serializers.userSerializer import RegisterSerializer
from users.models import CustomUser

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
