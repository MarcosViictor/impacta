from django.http import HttpResponse
from django.contrib import admin
from django.urls import path

def Olaturma(request):
    return HttpResponse("Olá turma!")
urlpatterns = [
    path('admin/', admin.site.urls),
    path('ola/', Olaturma)
]
