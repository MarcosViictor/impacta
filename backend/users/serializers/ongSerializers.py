# serializers.py
from rest_framework import serializers
from users.models import Ong, CustomUser
from api.models import Necessity, Post, Faq, Donation, Avaliation
from api.serializers.NecessitySerializers import NecessitySerializer
from api.serializers.PostsSerializers import PostSerializers
from api.serializers.faqSerializer import faqSerializer

class OngUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'city', 'state', 'address', 'postal_code']

class OngSerializer(serializers.ModelSerializer):
    user = OngUserSerializer(read_only=True)
    necessities = serializers.SerializerMethodField()
    posts = serializers.SerializerMethodField()
    faqs = serializers.SerializerMethodField()
    donations = serializers.SerializerMethodField()
    avaliations = serializers.SerializerMethodField()
    total_donations = serializers.SerializerMethodField()
    average_rating = serializers.SerializerMethodField()

    class Meta:
        model = Ong
        fields = [
            'id', 'user', 'name', 'description', 'created_at',
            'necessities', 'posts', 'faqs', 'donations', 'avaliations',
            'total_donations', 'average_rating'
        ]

    def get_necessities(self, obj):
        necessities = Necessity.objects.filter(org=obj)
        return NecessitySerializer(necessities, many=True).data

    def get_posts(self, obj):
        posts = Post.objects.filter(org_user=obj.user)
        return PostSerializers(posts, many=True).data

    def get_faqs(self, obj):
        faqs = Faq.objects.filter(org_user=obj.user)
        return faqSerializer(faqs, many=True).data

    def get_donations(self, obj):
        donations = Donation.objects.filter(org=obj)
        return [{
            'id': donation.id,
            'item': donation.item.name if donation.item else None,
            'donor': donation.donor.username if donation.donor else None,
            'date': donation.date
        } for donation in donations]

    def get_avaliations(self, obj):
        avaliations = Avaliation.objects.filter(org=obj)
        return [{
            'id': avaliation.id,
            'donor': avaliation.donor.username if avaliation.donor else None,
            'comment': avaliation.comment,
            'date': avaliation.date
        } for avaliation in avaliations]

    def get_total_donations(self, obj):
        return Donation.objects.filter(org=obj).count()

    def get_average_rating(self, obj):
        avaliations = Avaliation.objects.filter(org=obj)
        if not avaliations.exists():
            return None
        # Aqui você pode implementar a lógica de cálculo da média das avaliações
        # quando tiver um campo de rating no modelo Avaliation
        return None