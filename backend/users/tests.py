from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from users.models import CustomUser, userType
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

class UserAuthenticationTests(TestCase):
    def setUp(self):
        """Configuração inicial para os testes"""
        self.client = APIClient()
        self.register_url = reverse('register')
        self.login_url = reverse('token_obtain_pair')
        self.refresh_url = reverse('token_refresh')
        self.profile_url = reverse('user_profile')
        self.change_password_url = reverse('change_password')
        
        # Dados de teste para registro
        self.user_data = {
            'email': 'test@example.com',
            'username': 'testuser',
            'password': 'Test123456!',
            'password2': 'Test123456!',
            'user_type': userType.DONOR
        }
        
        # Dados de teste para login
        self.login_data = {
            'email': 'test@example.com',
            'password': 'Test123456!'
        }

    def test_user_registration(self):
        """Testa o registro de um novo usuário"""
        response = self.client.post(self.register_url, self.user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(CustomUser.objects.count(), 1)
        self.assertEqual(CustomUser.objects.get().email, 'test@example.com')
        self.assertEqual(CustomUser.objects.get().username, 'testuser')
        self.assertEqual(CustomUser.objects.get().user_type, userType.DONOR)

    def test_user_registration_with_invalid_data(self):
        """Testa o registro com dados inválidos"""
        # Teste com senhas diferentes
        invalid_data = self.user_data.copy()
        invalid_data['password2'] = 'DifferentPassword123!'
        response = self.client.post(self.register_url, invalid_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data)
        
        # Teste com email já existente
        self.client.post(self.register_url, self.user_data, format='json')
        response = self.client.post(self.register_url, self.user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('email', response.data)

    def test_user_login(self):
        """Testa o login de um usuário"""
        # Primeiro registra o usuário
        self.client.post(self.register_url, self.user_data, format='json')
        
        # Tenta fazer login
        response = self.client.post(self.login_url, self.login_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

    def test_user_login_with_invalid_credentials(self):
        """Testa o login com credenciais inválidas"""
        # Tenta fazer login sem ter registrado
        response = self.client.post(self.login_url, self.login_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        
        # Registra o usuário
        self.client.post(self.register_url, self.user_data, format='json')
        
        # Tenta fazer login com senha errada
        invalid_login = self.login_data.copy()
        invalid_login['password'] = 'WrongPassword123!'
        response = self.client.post(self.login_url, invalid_login, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_token_refresh(self):
        """Testa a renovação do token"""
        # Registra e faz login
        self.client.post(self.register_url, self.user_data, format='json')
        login_response = self.client.post(self.login_url, self.login_data, format='json')
        refresh_token = login_response.data['refresh']
        
        # Tenta renovar o token
        refresh_data = {'refresh': refresh_token}
        response = self.client.post(self.refresh_url, refresh_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)

    def test_protected_endpoint(self):
        """Testa acesso a um endpoint protegido"""
        # Registra e faz login
        self.client.post(self.register_url, self.user_data, format='json')
        login_response = self.client.post(self.login_url, self.login_data, format='json')
        access_token = login_response.data['access']
        
        # Configura o token no header
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')
        
        # Tenta acessar um endpoint protegido (exemplo: user status)
        response = self.client.get(reverse('user_status'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        # Tenta acessar sem token
        self.client.credentials()
        response = self.client.get(reverse('user_status'))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_password_strength_validation(self):
        """Testa a validação de força de senha"""
        # Senha muito curta (menos de 8 caracteres)
        weak_password_data = self.user_data.copy()
        weak_password_data['password'] = '123'
        weak_password_data['password2'] = '123'
        response = self.client.post(self.register_url, weak_password_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data)
        
        # Senha muito comum
        common_password_data = self.user_data.copy()
        common_password_data['email'] = 'common@example.com'
        common_password_data['username'] = 'commonuser'
        common_password_data['password'] = 'password123'
        common_password_data['password2'] = 'password123'
        response = self.client.post(self.register_url, common_password_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data)
        
        # Senha apenas numérica
        numeric_password_data = self.user_data.copy()
        numeric_password_data['email'] = 'numeric@example.com'
        numeric_password_data['username'] = 'numericuser'
        numeric_password_data['password'] = '12345678'
        numeric_password_data['password2'] = '12345678'
        response = self.client.post(self.register_url, numeric_password_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data)
        
        # Senha sem caracteres especiais
        no_special_chars_data = self.user_data.copy()
        no_special_chars_data['email'] = 'nospecial@example.com'
        no_special_chars_data['username'] = 'nospecialuser'
        no_special_chars_data['password'] = 'Test123456'
        no_special_chars_data['password2'] = 'Test123456'
        response = self.client.post(self.register_url, no_special_chars_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data)

    def test_different_user_types(self):
        """Testa o registro de diferentes tipos de usuário"""
        # Registra um usuário do tipo ONG
        ong_data = self.user_data.copy()
        ong_data['email'] = 'ong@example.com'
        ong_data['username'] = 'onguser'
        ong_data['user_type'] = userType.ONG
        response = self.client.post(self.register_url, ong_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(CustomUser.objects.get(email='ong@example.com').user_type, userType.ONG)
        
        # Registra um usuário do tipo Doador
        donor_data = self.user_data.copy()
        donor_data['email'] = 'donor@example.com'
        donor_data['username'] = 'donoruser'
        donor_data['user_type'] = userType.DONOR
        response = self.client.post(self.register_url, donor_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(CustomUser.objects.get(email='donor@example.com').user_type, userType.DONOR)
        
        # Verifica se ambos os usuários foram criados
        self.assertEqual(CustomUser.objects.count(), 2)

    def test_profile_update(self):
        """Testa a atualização de perfil"""
        # Registra e faz login
        self.client.post(self.register_url, self.user_data, format='json')
        login_response = self.client.post(self.login_url, self.login_data, format='json')
        access_token = login_response.data['access']
        
        # Configura o token no header
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')
        
        # Dados para atualização
        update_data = {
            'first_name': 'Novo',
            'last_name': 'Nome',
            'username': 'novousername'
        }
        
        # Tenta atualizar o perfil
        response = self.client.patch(self.profile_url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['first_name'], 'Novo')
        self.assertEqual(response.data['last_name'], 'Nome')
        self.assertEqual(response.data['username'], 'novousername')
        
        # Verifica se os dados foram atualizados no banco
        user = CustomUser.objects.get(email='test@example.com')
        self.assertEqual(user.first_name, 'Novo')
        self.assertEqual(user.last_name, 'Nome')
        self.assertEqual(user.username, 'novousername')
        
        # Tenta atualizar campos que não podem ser alterados
        protected_data = {
            'email': 'novo@example.com',
            'user_type': userType.ONG
        }
        response = self.client.patch(self.profile_url, protected_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Verifica se os campos protegidos não foram alterados
        self.assertNotEqual(response.data['email'], 'novo@example.com')
        self.assertNotEqual(response.data['user_type'], userType.ONG)

    def test_change_password(self):
        """Testa a alteração de senha"""
        # Registra e faz login
        self.client.post(self.register_url, self.user_data, format='json')
        login_response = self.client.post(self.login_url, self.login_data, format='json')
        access_token = login_response.data['access']
        
        # Configura o token no header
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')
        
        # Dados para alteração de senha
        password_data = {
            'old_password': 'Test123456!',
            'new_password': 'NovaSenha123!',
            'new_password2': 'NovaSenha123!'
        }
        
        # Tenta alterar a senha
        response = self.client.post(self.change_password_url, password_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        # Tenta fazer login com a nova senha
        self.client.credentials()  # Remove o token
        new_login_data = {
            'email': 'test@example.com',
            'password': 'NovaSenha123!'
        }
        login_response = self.client.post(self.login_url, new_login_data, format='json')
        self.assertEqual(login_response.status_code, status.HTTP_200_OK)
        
        # Tenta alterar a senha com a senha antiga incorreta
        # Primeiro faz login novamente para obter um novo token
        login_response = self.client.post(self.login_url, new_login_data, format='json')
        access_token = login_response.data['access']
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')
        
        wrong_password_data = {
            'old_password': 'SenhaErrada123!',
            'new_password': 'OutraSenha123!',
            'new_password2': 'OutraSenha123!'
        }
        response = self.client.post(self.change_password_url, wrong_password_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('old_password', response.data)
