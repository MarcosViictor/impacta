import { OngTypes } from '@/types/OngTypes';
import { getCookie } from '@/utils/cookies';
import { api } from '@/utils/api';


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
  try {
    const { data } = await api.get(`/users/ongs/${id}/`);
    console.log(data)
    return data;
  } catch (error) {
    console.error('Erro ao buscar ONG:', error);
    throw error;
  }
};



