import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: 'https://picsum.photos/v2/',
  timeout: 3000
});

const http = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    instance.get<T>(url, config).then(res => res.data),
  post: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    instance.post<T>(url, payload, config).then(res => res.data)
};

export default http;
