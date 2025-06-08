import { OngNecessitiesTypes } from "@/types/OngTypes";
import { api } from "@/utils/api";

export const createNecessityOng = async (necessityData: OngNecessitiesTypes) => {
    try {
        const response = await api.post(`/necessities/`, necessityData);
        console.log('Necessity created for ONG:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching necessity for ONG:', error);
        throw error;
    }
};

export const getNecessityOng = async () => {
    try {
        const {data} = await api.get(`/necessities/`);
        console.log('Necessity fetched for ONG:', data);
        return data;
    } catch (error) {
        console.error('Error fetching necessity for ONG:', error);
        throw error;
    }
}