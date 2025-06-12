from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from api.models import Post
from api.serializers.PostsSerializers import PostSerializers
from rest_framework.exceptions import PermissionDenied

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        user = self.request.user
        if user.user_type != 'ONG':
            raise PermissionDenied("Apenas ONGs podem criar posts.")
        serializer.save(org_user=user)
