import { ongTypes, userLogin, userTypes } from '@/types/userTypes';
import { setCookie } from '@/utils/cookies';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const createUser = async (
    userData: userTypes
) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register/`, userData);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;
  }
};

export const Login = async (
    userData: userLogin
) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login/`, userData);
    if (data) {
      setCookie('access_token', data.access);
      setCookie('refresh_token', data.refresh);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
    }
    return data;
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    throw error;
  }
};

export const createOng = async (ongData: ongTypes) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register/ong/`, ongData);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar ONG:', error);
    throw error;
  }
};

