from rest_framework import serializers
from api.models import Post
from api.models import Ong

class PostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields =['id', 'image','video', 'description']
        read_only_fields = ['id']

    def validate(self, data):
        if not data.get('image') and not data.get('video') and not data.get('desciption'):
            raise serializers.ValidationError("At least one of the image, video or description fields must be filled in")
        return data