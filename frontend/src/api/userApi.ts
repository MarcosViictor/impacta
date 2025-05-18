import { userTypes } from '@/types/userTypes';
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