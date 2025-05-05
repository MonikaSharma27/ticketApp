import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://ticket-app-wine-one.vercel.app/";
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
 
});

export default axiosInstance;