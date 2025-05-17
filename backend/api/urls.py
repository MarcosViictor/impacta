from django.urls import path, include
from rest_framework.routers import DefaultRouter

# Views já existentes
from api.views.posts.PostsViews import PostViewSet
from api.views.faq.faqViews import FaqViewsSet

# Novas views de doações
from api.views.necessityDonations.necessityDonationsView import NecessityViewSet
from api.views.donations.donationView import DonationViewSet
from api.views.PaymentInfo.PaymentInfoView import PaymentInfoViewSet
from api.views.DonationReport.donation_report_view import DonationReportViewSet
from api.views.Accountability.accountability_view import AccountabilityViewSet
from api.views.items.ItemsViews import ItemViewSet 

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')
router.register(r'faqs', FaqViewsSet, basename='faq')

# Novas rotas
router.register(r'necessities', NecessityViewSet, basename='necessity')
router.register(r'donations', DonationViewSet, basename='donation')
router.register(r'payment-info', PaymentInfoViewSet, basename='payment-info')
router.register(r'donation-reports', DonationReportViewSet, basename='donation-report')
router.register(r'accountability', AccountabilityViewSet, basename='accountability')
router.register(r'items', ItemViewSet, basename='item')

urlpatterns = [
    path('', include(router.urls)),
]
