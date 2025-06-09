from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from api.models import Post
from api.serializers.PostsSerializers import PostSerializers
from rest_framework.exceptions import PermissionDenied
import logging

logger = logging.getLogger('api')

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        user = self.request.user
        if user.user_type != 'ONG':
            logger.warning(f"Usuário {user} tentou criar post sem permissão.")
            raise PermissionDenied("Apenas ONGs podem criar posts.")
        logger.info(f"ONG {user} criou um novo post.")
        serializer.save(org_user=user)
