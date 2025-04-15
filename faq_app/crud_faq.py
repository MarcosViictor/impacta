from .models import FAQ
from django.db.models import QuerySet
from django.shortcuts import get_object_or_404

def listar_faqs_ativas() -> QuerySet[FAQ]:
    return FAQ.objects.filter(ativo=True).order_by('pergunta')

def obter_faq_por_id(faq_id: int) -> FAQ | None:
    try:
        return FAQ.objects.get(pk=faq_id, ativo=True)
    except FAQ.DoesNotExist:
        return None

def criar_faq(pergunta: str, resposta: str, ativo: bool = True) -> FAQ:
    if not pergunta or not resposta:
        raise ValueError("A pergunta e a resposta são obrigatórias.")
    faq = FAQ(pergunta=pergunta.strip(), resposta=resposta.strip(), ativo=ativo)
    faq.save()
    return faq

def atualizar_faq(faq_id: int, pergunta: str = None, resposta: str = None, ativo: bool = None) -> FAQ | None:
    try:
        faq = FAQ.objects.get(pk=faq_id)
    except FAQ.DoesNotExist:
        return None

    if pergunta is not None:
        faq.pergunta = pergunta.strip()
    if resposta is not None:
        faq.resposta = resposta.strip()
    if ativo is not None:
        faq.ativo = ativo
    faq.save()
    return faq

def deletar_faq(faq_id: int) -> bool:
    try:
        faq = FAQ.objects.get(pk=faq_id)
        faq.delete()
        return True
    except FAQ.DoesNotExist:
        return False

def obter_faq_ou_erro_404(faq_id: int) -> FAQ:
    return get_object_or_404(FAQ, pk=faq_id, ativo=True)

def obter_faq_para_edicao(faq_id: int) -> FAQ:
    return get_object_or_404(FAQ, pk=faq_id)