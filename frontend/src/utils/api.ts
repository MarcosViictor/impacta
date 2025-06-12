import axios from "axios";
import { getCookie } from "./cookies";

// const API_URL = "https://impacta-deploy.onrender.com/api";
const API_URL = "http://localhost:8000/api";

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = getCookie("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});