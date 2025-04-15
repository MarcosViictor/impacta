from django.shortcuts import render, get_object_or_404, redirect
from .models import Avaliation
from .forms import AvaliationForm

# Listar avaliações
def avaliation_list(request):
    avaliations = Avaliation.objects.all()
    return render(request, 'avaliations/list.html', {'avaliations': avaliations})

# Criar nova avaliação
def avaliation_create(request):
    if request.method == 'POST':
        form = AvaliationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('avaliation_list')
    else:
        form = AvaliationForm()
    return render(request, 'avaliations/form.html', {'form': form})

# Editar avaliação
def avaliation_update(request, pk):
    avaliation = get_object_or_404(Avaliation, pk=pk)
    form = AvaliationForm(request.POST or None, instance=avaliation)
    if form.is_valid():
        form.save()
        return redirect('avaliation_list')
    return render(request, 'avaliations/form.html', {'form': form})

# Deletar avaliação
def avaliation_delete(request, pk):
    avaliation = get_object_or_404(Avaliation, pk=pk)
    if request.method == 'POST':
        avaliation.delete()
        return redirect('avaliation_list')
    return render(request, 'avaliations/confirm_delete.html', {'avaliation': avaliation})
