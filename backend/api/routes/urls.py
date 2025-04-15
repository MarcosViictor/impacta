from django.urls import path
from . import views

urlpatterns = [
    path('avaliacoes/', views.avaliation_list, name='avaliation_list'),  # Lista as avaliações
    path('avaliacoes/criar/', views.avaliation_create, name='avaliation_create'),  # Cria uma nova avaliação
    path('avaliacoes/<int:pk>/editar/', views.avaliation_update, name='avaliation_update'),  # Edita uma avaliação
    path('avaliacoes/<int:pk>/deletar/', views.avaliation_delete, name='avaliation_delete'),  # Deleta uma avaliação
]
