import { api } from '@/utils/api';
import { ItemOngTypes } from '../types/OngTypes';

export const createItemOng = async (itemOng: ItemOngTypes): Promise<ItemOngTypes> => {
    try {
        const response = await api.post(`/necessities/`, itemOng);
        console.log('Item created for ONG:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating item for ONG:', error);
        throw error;
    }
};