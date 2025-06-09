import { api } from "@/utils/api";
import { FaqTypes } from "@/types/FaqTypes";
import { getCookie } from "@/utils/cookies";



export const createFaq = async ({org_user, question, answer} : FaqTypes) => {
    const getOngId = getCookie("ongId");

    try {
        const response = await api.post(`/faqs/`, {
            org_user: getOngId,
            question,
            answer
        });
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