import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export const addApiInterceptors = (api: AxiosInstance) => {
  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      return error.response;
    },
  );

  return api;
};
