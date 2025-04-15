from django.db import models
from django.shortcuts import get_object_or_404
from django.db.models import QuerySet

class FAQ(models.Model):
    pergunta = models.CharField(max_length=255, verbose_name="Pergunta")
    resposta = models.TextField(verbose_name="Resposta")
    data_criacao = models.DateTimeField(auto_now_add=True, verbose_name="Data de Criação")
    data_atualizacao = models.DateTimeField(auto_now=True, verbose_name="Data de Atualização")
    ativo = models.BooleanField(default=True, verbose_name="Ativo")

    def __str__(self):
        return self.pergunta

    class Meta:
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"
        ordering = ['pergunta']

def listar_faqs_ativas() -> QuerySet[FAQ]:
    """Retorna todas as FAQs ativas, ordenadas por pergunta."""
    return FAQ.objects.filter(ativo=True).order_by('pergunta')

def obter_faq_por_id(faq_id: int) -> FAQ | None:
    """Retorna uma FAQ específica pelo seu ID, se estiver ativa."""
    try:
        return FAQ.objects.get(pk=faq_id, ativo=True)
    except FAQ.DoesNotExist:
        return None

def criar_faq(pergunta: str, resposta: str, ativo: bool = True) -> FAQ:
    """Cria uma nova FAQ."""
    if not pergunta or not resposta:
        raise ValueError("A pergunta e a resposta são obrigatórias.")
    faq = FAQ(pergunta=pergunta.strip(), resposta=resposta.strip(), ativo=ativo)
    faq.save()
    return faq

def atualizar_faq(faq_id: int, pergunta: str = None, resposta: str = None, ativo: bool = None) -> FAQ | None:
    """Atualiza uma FAQ existente pelo seu ID."""
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
    """Deleta uma FAQ pelo seu ID."""
    try:
        faq = FAQ.objects.get(pk=faq_id)
        faq.delete()
        return True
    except FAQ.DoesNotExist:
        return False

def obter_faq_ou_erro_404(faq_id: int) -> FAQ:
    """Retorna uma FAQ pelo ID ou levanta um Http404."""
    return get_object_or_404(FAQ, pk=faq_id, ativo=True)

def obter_faq_para_edicao(faq_id: int) -> FAQ:
    """Retorna uma FAQ pelo ID para edição (não necessariamente ativa)."""
    return get_object_or_404(FAQ, pk=faq_id)