import axios from "axios";
import { getToken } from "./auth";

const apiAcademico = axios.create({
  baseURL: "http://127.0.0.1:3333/",
  headers: {
    "content-type": "application/json;charset=utf-8",
  },
});

apiAcademico.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiAcademico;
