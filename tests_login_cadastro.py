import unittest
from unittest.mock import patch

class SimpleUser:
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

class SimpleAuthSystem:
    def __init__(self, user_creation_notifier=None):
        self.users = {}
        self.session = {}
        self.user_creation_notifier = user_creation_notifier

    def register(self, username, email, password, password2):
        if password != password2:
            return "Senhas não coincidem"
        if username in self.users:
            return "Nome de usuário já existe"
        user = SimpleUser(username, email, password)
        self.users[username] = user
        if self.user_creation_notifier:
            self.user_creation_notifier.notify(username)
        return "Cadastro realizado com sucesso"

    def login(self, username, password):
        if username not in self.users:
            return "Usuário não encontrado"
        if self.users[username].password == password:
            self.session['user_id'] = username
            return "Login realizado com sucesso"
        else:
            return "Senha incorreta"

    def get_session_user_id(self):
        return self.session.get('user_id')

class UserCreationNotifier:
    def notify(self, username):
        print(f"Notificando sobre a criação do usuário: {username}")

class MockUserCreationNotifier:
    def __init__(self):
        self.notified_users = []

    def notify(self, username):
        self.notified_users.append(username)

class TestLoginCadastro(unittest.TestCase):
    def setUp(self):
        self.auth_system = SimpleAuthSystem()

    def test_cadastro_usuario_sucesso(self):
        """Testa o cadastro de um usuário bem-sucedido."""
        resultado = self.auth_system.register('testeuser', 'teste@email.com', 'senha123', 'senha123')
        self.assertEqual(resultado, "Cadastro realizado com sucesso")
        self.assertIn('testeuser', self.auth_system.users)
        self.assertEqual(self.auth_system.users['testeuser'].email, 'teste@email.com')

    def test_cadastro_usuario_falha_senhas_diferentes(self):
        """Testa o cadastro falha quando as senhas não coincidem."""
        resultado = self.auth_system.register('testeuser', 'teste@email.com', 'senha123', 'outra_senha')
        self.assertEqual(resultado, "Senhas não coincidem")
        self.assertNotIn('testeuser', self.auth_system.users)

    def test_cadastro_usuario_falha_username_existente(self):
        """Testa o cadastro falha quando o username já existe."""
        self.auth_system.register('testeuser', 'teste@email.com', 'senha123', 'senha123')
        resultado = self.auth_system.register('testeuser', 'novo@email.com', 'senha123', 'senha123')
        self.assertEqual(resultado, "Nome de usuário já existe")
        self.assertEqual(len(self.auth_system.users), 1)
        self.assertEqual(self.auth_system.users['testeuser'].email, 'teste@email.com')

    def test_login_usuario_sucesso(self):
        """Testa o login de um usuário existente bem-sucedido."""
        self.auth_system.register('testeuser', 'teste@email.com', 'senha123', 'senha123')
        resultado = self.auth_system.login('testeuser', 'senha123')
        self.assertEqual(resultado, "Login realizado com sucesso")
        self.assertEqual(self.auth_system.get_session_user_id(), 'testeuser')

    def test_login_usuario_falha_credenciais_invalidas(self):
        """Testa o login falha com credenciais inválidas."""
        self.auth_system.register('testeuser', 'teste@email.com', 'senha123', 'senha123')
        resultado = self.auth_system.login('testeuser', 'senha_errada')
        self.assertEqual(resultado, "Senha incorreta")
        self.assertIsNone(self.auth_system.get_session_user_id())

    def test_login_usuario_falha_usuario_nao_existe(self):
        """Testa o login falha quando o usuário não existe."""
        resultado = self.auth_system.login('usuario_inexistente', 'senha123')
        self.assertEqual(resultado, "Usuário não encontrado")
        self.assertIsNone(self.auth_system.get_session_user_id())

    def test_login_usuario_falha_campos_vazios(self):
        """Testa o login falha com campos vazios."""
        resultado = self.auth_system.login('', '')
        self.assertEqual(resultado, "Usuário não encontrado")
        self.assertIsNone(self.auth_system.get_session_user_id())

    def test_cadastro_usuario_notifica_com_mock(self):
        """Testa se o notificador de criação de usuário é chamado com mock."""
        mock_notifier = MockUserCreationNotifier()
        auth_system_com_mock = SimpleAuthSystem(user_creation_notifier=mock_notifier)
        auth_system_com_mock.register('testenotify', 'notify@email.com', 'senha123', 'senha123')
        self.assertEqual(mock_notifier.notified_users, ['testenotify'])

    def test_cadastro_usuario_nao_notifica_sem_notifier(self):
        """Testa que a função de notificação não é chamada se o notificador for None."""
        auth_system_sem_notifier = SimpleAuthSystem()
        resultado = auth_system_sem_notifier.register('testesemnotify', 'semnotify@email.com', 'senha123', 'senha123')
        self.assertEqual(resultado, "Cadastro realizado com sucesso")

    @patch.object(SimpleAuthSystem, 'register')
    def test_algum_aspecto_do_cadastro_com_patch(self, mock_register):
        """Exemplo de como usar patch para simular o método register."""
        mock_register.return_value = "Cadastro simulado com sucesso"
        auth_system = SimpleAuthSystem()
        resultado = auth_system.register('outroteste', 'outro@email.com', 'senha456', 'senha456')
        self.assertEqual(resultado, "Cadastro simulado com sucesso")
        mock_register.assert_called_once_with('outroteste', 'outro@email.com', 'senha456', 'senha456')

if __name__ == '__main__':
    unittest.main()