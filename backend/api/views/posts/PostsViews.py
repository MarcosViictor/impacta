from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from api.models import Post
from api.serializers.PostsSerializers import PostSerializers

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializers
    # permission_classes [IsAuthenticatedOrReadOnly]
    def perform_create(self, serializer):
        serializer.save()