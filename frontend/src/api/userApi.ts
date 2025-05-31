import { OngTypes, UserLogin, User } from '@/types/userTypes';
import { setCookie } from '@/utils/cookies';
import { api } from '@/utils/api';

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
    if (data) {
      setCookie('access_token', data.access);
      setCookie('refresh_token', data.refresh);
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

