import axios from "axios";
import { getCookie } from "@/utils/cookies";

const token = getCookie("access_token");

export const api = axios.create({
  baseURL: "https://impacta-deploy.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }

})