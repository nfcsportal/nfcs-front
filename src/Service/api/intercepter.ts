import axios, { AxiosRequestConfig } from 'axios';

export const API_URL =
  'https://cors-anywhere.herokuapp.com/http://ec2-18-233-167-133.compute-1.amazonaws.com:8080/api';
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  const tokent = localStorage.getItem('token');
  if (config && config.headers) {
    config.headers.Authorization = `Bearer ${tokent}`;
    config.headers['Access-Control-Allow-Headers'] = 'x-requested-with, x-requested-by';
    return config;
  }
});

export const $refreshApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$refreshApi.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const tokent = await localStorage.getItem('refresh');
  if (config && config.headers) {
    config.headers.refreshToken = `${tokent}`;
    config.headers.origin = 'origin';
    return config;
  }
});

export default $api;
