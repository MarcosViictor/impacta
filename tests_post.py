import unittest
from datetime import datetime

class Postagem:
    def __init__(self, titulo, conteudo, autor, data_criacao=None, publicado=False):
        if not titulo:
            raise ValueError("O título não pode estar vazio.")
        if not conteudo:
            raise ValueError("O conteúdo não pode estar vazio.")
        if not autor:
            raise ValueError("O autor não pode estar vazio.")
        self.titulo = titulo
        self.conteudo = conteudo
        self.autor = autor
        self.data_criacao = data_criacao if data_criacao else datetime.now()
        self.publicado = publicado

    def publicar(self):
        if not self.publicado:
            self.publicado = True

    def despublicar(self):
        if self.publicado:
            self.publicado = False

    def __str__(self):
        return f"Postagem: {self.titulo} por {self.autor}"

class TestPostagem(unittest.TestCase):

    def test_criar_postagem_valida(self):
        agora = datetime.now()
        postagem = Postagem("Meu Título", "Meu conteúdo", "João", agora)
        self.assertEqual(postagem.titulo, "Meu Título")
        self.assertEqual(postagem.conteudo, "Meu conteúdo")
        self.assertEqual(postagem.autor, "João")
        self.assertEqual(postagem.data_criacao, agora)
        self.assertFalse(postagem.publicado)

    def test_criar_postagem_sem_data_criacao(self):
        postagem = Postagem("Outro Título", "Outro conteúdo", "Maria")
        self.assertIsNotNone(postagem.data_criacao)
        self.assertIsInstance(postagem.data_criacao, datetime)

    def test_criar_postagem_sem_titulo(self):
        with self.assertRaises(ValueError) as context:
            Postagem("", "Conteúdo", "Pedro")
        self.assertEqual(str(context.exception), "O título não pode estar vazio.")

    def test_criar_postagem_sem_conteudo(self):
        with self.assertRaises(ValueError) as context:
            Postagem("Título", "", "Ana")
        self.assertEqual(str(context.exception), "O conteúdo não pode estar vazio.")

    def test_criar_postagem_sem_autor(self):
        with self.assertRaises(ValueError) as context:
            Postagem("Título", "Conteúdo", "")
        self.assertEqual(str(context.exception), "O autor não pode estar vazio.")

    def test_publicar_postagem(self):
        postagem = Postagem("Título para Publicar", "Conteúdo", "Carlos")
        self.assertFalse(postagem.publicado)
        postagem.publicar()
        self.assertTrue(postagem.publicado)

    def test_publicar_postagem_ja_publicada(self):
        postagem = Postagem("Título Já Publicado", "Conteúdo", "Sofia", publicado=True)
        self.assertTrue(postagem.publicado)
        postagem.publicar()
        self.assertTrue(postagem.publicado) # Deve permanecer True

    def test_despublicar_postagem(self):
        postagem = Postagem("Título para Despublicar", "Conteúdo", "Lucas", publicado=True)
        self.assertTrue(postagem.publicado)
        postagem.despublicar()
        self.assertFalse(postagem.publicado)

    def test_despublicar_postagem_ja_despublicada(self):
        postagem = Postagem("Título Já Despublicado", "Conteúdo", "Isabela")
        self.assertFalse(postagem.publicado)
        postagem.despublicar()
        self.assertFalse(postagem.publicado) # Deve permanecer False

    def test_str_metodo(self):
        postagem = Postagem("Título Teste Str", "Conteúdo", "Rafael")
        self.assertEqual(str(postagem), "Postagem: Título Teste Str por Rafael")

if __name__ == '__main__':
    unittest.main()