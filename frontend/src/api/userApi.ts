import { userLogin, userTypes } from '@/types/userTypes';
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
    const response = await axios.post(`${API_URL}/auth/login/`, userData);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    throw error;
  }
};

