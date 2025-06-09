import { api } from "@/utils/api";
import { DonationType } from "@/types/Donation";

export const createDonation = async (donation: DonationType) => {
  try {
    const {data} = await api.post("/donations/", donation);
    return data;
  } catch (error) {
    console.error("Error creating donation:", error);
    throw error;
  }
};