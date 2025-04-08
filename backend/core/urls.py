from django.http import HttpResponse
from django.contrib import admin
from django.urls import path, include
from auth_app.views import ProtectedView

def Olaturma(request):
    return HttpResponse("Olá turma!")
urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('api/', include('core.urls')),  # Rotas da aplicação principal
    # path('api/v1/', include('core.urls')),  # Rotas da aplicação principal
]
