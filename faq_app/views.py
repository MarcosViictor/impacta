from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.shortcuts import get_object_or_404
from . import crud_faq  # Importe as funções CRUD

@require_http_methods(["GET"])
def listar_faqs_api(request):
    faqs = crud_faq.listar_faqs_ativas()
    data = [{"id": faq.id, "pergunta": faq.pergunta, "resposta": faq.resposta, "ativo": faq.ativo} for faq in faqs]
    return JsonResponse({"faqs": data})

@require_http_methods(["GET"])
def detalhar_faq_api(request, faq_id):
    faq = crud_faq.obter_faq_ou_erro_404(faq_id)
    data = {"id": faq.id, "pergunta": faq.pergunta, "resposta": faq.resposta, "ativo": faq.ativo}
    return JsonResponse(data)

@require_http_methods(["POST"])
def criar_faq_api(request):
    pergunta = request.POST.get('pergunta')
    resposta = request.POST.get('resposta')
    ativo = request.POST.get('ativo') == 'true' if request.POST.get('ativo') else True
    try:
        faq = crud_faq.criar_faq(pergunta, resposta, ativo)
        return JsonResponse({"id": faq.id, "mensagem": "FAQ criada com sucesso"}, status=201)
    except ValueError as e:
        return JsonResponse({"erro": str(e)}, status=400)

@require_http_methods(["PUT"])
def atualizar_faq_api(request, faq_id):
    import json
    try:
        data = json.loads(request.body)
        pergunta = data.get('pergunta')
        resposta = data.get('resposta')
        ativo = data.get('ativo')
    except json.JSONDecodeError:
        return JsonResponse({"erro": "Dados JSON inválidos"}, status=400)

    faq = crud_faq.atualizar_faq(faq_id, pergunta, resposta, ativo)
    if faq:
        return JsonResponse({"mensagem": f"FAQ com ID {faq_id} atualizada com sucesso"})
    else:
        return JsonResponse({"erro": f"FAQ com ID {faq_id} não encontrada"}, status=404)

@require_http_methods(["DELETE"])
def deletar_faq_api(request, faq_id):
    if crud_faq.deletar_faq(faq_id):
        return JsonResponse({"mensagem": f"FAQ com ID {faq_id} deletada com sucesso"})
    else:
        return JsonResponse({"erro": f"FAQ com ID {faq_id} não encontrada"}, status=404)