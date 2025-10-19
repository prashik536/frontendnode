import axios from "axios";

const api = axios.create({
  baseURL: "https://www.awstrainingmumbai.co.in", // backend URL
  withCredentials: true,
});

export default api;
