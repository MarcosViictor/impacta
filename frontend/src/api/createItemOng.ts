import { api } from '@/utils/api';
import { ItemOngTypes } from '../types/OngTypes';

export const createItemOng = async (itemOng: ItemOngTypes): Promise<ItemOngTypes> => {
    try {
        const response = await api.post(`/items/`, itemOng);
        console.log('Item created for ONG:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating item for ONG:', error);
        throw error;
    }
};

export const getItemsOng = async () => {
    try {
        const { data } = await api.get(`/items/`);
        console.log('Items fetched for ONG:', data);
        return data;
    } catch (error) {
        console.error('Error fetching items for ONG:', error);
        throw error;
    }
};