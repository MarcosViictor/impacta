import { OngTypes } from '@/types/OngTypes';
import { getCookie } from '@/utils/cookies';
import { api } from '@/utils/api';

const token = getCookie('access_token');

export const getOngs = async (): Promise<OngTypes[]> => {
  try {
    const {data} = await api.get(`/users/ongs/`);
    console.log(data)
    return data;
  } catch (error) {
    console.error('Erro ao listar ONGs:', error);
    throw error;
  }
};

export const getOngById = async (id: string): Promise<OngTypes> => {
  const token = getCookie('access_token');
  try {
    const { data } = await api.get(`/users/ongs/${id}/`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar ONG:', error);
    throw error;
  }
};

console.log(token)


