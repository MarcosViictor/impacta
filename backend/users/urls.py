from django.urls import path
from users.views.registerView import RegisterView  
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from users.views.userStatusView import UserStatusView
from users.views.userProfileView import UserProfileView, ChangePasswordView
from users.views.ongView import OngDetailView, OngListView  
from users.views import CustomTokenObtainPairView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('status/', UserStatusView.as_view(), name='user_status'),
    path('profile/', UserProfileView.as_view(), name='user_profile'),
    path('change-password/', ChangePasswordView.as_view(), name='change_password'),
    path('ongs/', OngListView.as_view(), name='ong-list'),  
    path('ongs/<int:id>/', OngDetailView.as_view(), name='ong-detail')
]
