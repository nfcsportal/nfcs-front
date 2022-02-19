import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = 'http://localhost:5000/api';
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  const tokent = localStorage.getItem('token');
  if (config && config.headers) {
    config.headers.Authorization = `Bearer ${tokent}`;
    return config;
  }
});

export default $api;
