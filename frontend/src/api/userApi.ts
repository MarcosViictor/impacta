import { OngTypes, UserLogin, User, DecodedJWT } from '@/types/userTypes';
import { setCookie } from '@/utils/cookies';
import { api } from '@/utils/api';
import { jwtDecode } from 'jwt-decode';

export const createUser = async (
    userData: User
) => {
  try {
    const response = await api.post('/auth/register/', userData);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;
  }
};

export const Login = async (
    userData: UserLogin
) => {
  try {
    const { data } = await api.post('/auth/login/', userData);
    if (data && data.access) {
      setCookie('access_token', data.access);
      setCookie('refresh_token', data.refresh);
      
      // Decodifica o token JWT para obter as informações do usuário
      const decodedToken = jwtDecode(data.access) as DecodedJWT;
      setCookie('user_id', decodedToken.user_id.toString());
      
      // Adiciona o user_type ao data de retorno para manter compatibilidade
      data.user_type = decodedToken.user_type;
    }

    return data;
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    throw error;
  }
};

export const createOng = async (ongData: OngTypes) => {
  try {
    const response = await api.post('/auth/register/', ongData);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar ONG:', error);
    throw error;
  }
};

