# api/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views.posts.PostsViews import PostViewSet
from api.views.faq.faqViews import FaqViewsSet

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')
router.register(r'faqs', FaqViewsSet, basename='faq')

urlpatterns = [
    path('', include(router.urls)),
]
