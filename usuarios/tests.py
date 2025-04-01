import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.test_settings')
django.setup()

from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse
from unittest.mock import patch

class TestLoginCadastro(TestCase):

    @patch('django.conf.settings.configure')
    def test_cadastro_usuario_sucesso(self, mock_configure):
        """Testa o cadastro de um usuário bem-sucedido."""
        mock_configure.return_value = None  # Evita a chamada real de configure()
        dados_cadastro = {
            'username': 'testeuser',
            'email': 'teste@email.com',
            'password': 'senha123',
            'password2': 'senha123',
        }
        response = self.client.post(reverse('cadastro'), dados_cadastro)
        self.assertEqual(response.status_code, 302)  # Redirecionamento após sucesso
        self.assertTrue(User.objects.filter(username='testeuser').exists())
        self.assertEqual(User.objects.get(username='testeuser').email, 'teste@email.com')

    @patch('django.conf.settings.configure')
    def test_cadastro_usuario_falha_senhas_diferentes(self, mock_configure):
        """Testa o cadastro falha quando as senhas não coincidem."""
        mock_configure.return_value = None
        dados_cadastro = {
            'username': 'testeuser',
            'email': 'teste@email.com',
            'password': 'senha123',
            'password2': 'outra_senha',
        }
        response = self.client.post(reverse('cadastro'), dados_cadastro)
        self.assertEqual(response.status_code, 200)  # Ou outro código de erro apropriado
        self.assertFalse(User.objects.filter(username='testeuser').exists())

    @patch('django.conf.settings.configure')
    def test_cadastro_usuario_falha_username_existente(self, mock_configure):
        """Testa o cadastro falha quando o username já existe."""
        mock_configure.return_value = None
        User.objects.create_user(username='testeuser', password='senha123')
        dados_cadastro = {
            'username': 'testeuser',
            'email': 'novo@email.com',
            'password': 'senha123',
            'password2': 'senha123',
        }
        response = self.client.post(reverse('cadastro'), dados_cadastro)
        self.assertEqual(response.status_code, 200)  # Ou código de erro apropriado
        self.assertEqual(User.objects.filter(username='testeuser').count(), 1)

    @patch('django.conf.settings.configure')
    def test_login_usuario_sucesso(self, mock_configure):
        """Testa o login de um usuário existente bem-sucedido."""
        mock_configure.return_value = None
        User.objects.create_user(username='testeuser', password='senha123')
        dados_login = {
            'username': 'testeuser',
            'password': 'senha123',
        }
        response = self.client.post(reverse('login'), dados_login)
        self.assertEqual(response.status_code, 302)  # Redirecionamento após sucesso
        self.assertTrue(self.client.session.get('_auth_user_id'))  # Verifica se o usuário está logado

    @patch('django.conf.settings.configure')
    def test_login_usuario_falha_credenciais_invalidas(self, mock_configure):
        """Testa o login falha com credenciais inválidas."""
        mock_configure.return_value = None
        dados_login = {
            'username': 'testeuser',
            'password': 'senha_errada',
        }
        response = self.client.post(reverse('login'), dados_login)
        self.assertEqual(response.status_code, 200)  # Ou outro código de erro apropriado
        self.assertFalse(self.client.session.get('_auth_user_id'))  # Verifica se o usuário não está logado

    @patch('django.conf.settings.configure')
    def test_login_usuario_falha_usuario_nao_existe(self, mock_configure):
        """Testa o login falha quando o usuário não existe."""
        mock_configure.return_value = None
        dados_login = {
            'username': 'usuario_inexistente',
            'password': 'senha123',
        }
        response = self.client.post(reverse('login'), dados_login)
        self.assertEqual(response.status_code, 200)  # Ou código de erro apropriado
        self.assertFalse(self.client.session.get('_auth_user_id'))

    @patch('django.conf.settings.configure')
    def test_login_usuario_falha_campos_vazios(self, mock_configure):
        """Testa o login falha com campos vazios."""
        mock_configure.return_value = None
        dados_login = {
            'username': '',
            'password': '',
        }
        response = self.client.post(reverse('login'), dados_login)
        self.assertEqual(response.status_code, 200)  # Ou código de erro apropriado
        self.assertFalse(self.client.session.get('_auth_user_id'))