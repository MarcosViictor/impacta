import { OngTypes } from '@/types/OngTypes';
import axios from 'axios';
import { getCookie } from '@/utils/cookies';

const API_URL = 'http://localhost:8000/api';

const token = getCookie('access_token');

export const getOngs = async (): Promise<OngTypes[]> => {
  try {
    const {data} = await axios.get(`${API_URL}/users/ongs/`,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    console.log(data)
    return data;
  } catch (error) {
    console.error('Erro ao listar ONGs:', error);
    throw error;
  }
};

console.log(token)


