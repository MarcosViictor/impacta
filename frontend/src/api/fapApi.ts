import { api } from "@/utils/api";
import { FaqTypes } from "@/types/FaqTypes";

export const createFaq = async (Faq: FaqTypes) => {
    try {
        const response = await api.post(`/faqs/`, Faq);
        console.log('FAQ created:', response.data);
        return response.data;
    }
    catch (error) {
        console.error('Error creating FAQ:', error);
        throw error;
    }
};

export const getFaqs = async (): Promise<FaqTypes[]> => {
    try {
        const { data } = await api.get(`/faqs/`);
        console.log('FAQs fetched:', data);
        return data;
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        throw error;
    }
}