import axios, { type AxiosInstance, type AxiosError } from 'axios';

import type { HttpRequest, IHttpClient } from './http-client';

export class HttpClient implements IHttpClient {
  constructor(
    private baseUrl: string = import.meta.env.VITE_API_URL_SUBSCRIPTION,
    private api: AxiosInstance = axios,
  ) {}

  async sendRequest<TResponse, TBody>(params: HttpRequest<TBody>) {
    const { endpoint, method, body, headers } = params;

    try {
      const { data } = await this.api.request<TResponse>({
        url: endpoint,
        method,
        headers,
        data: body,
        baseURL: this.baseUrl,
      });

      return data;
    } catch (err) {
      const error = err as AxiosError;
      const status = error.response?.status || 500;
      const message = error.response?.data || error.message;
      throw new Error(`Request failed with status ${status}: ${message}`);
    }
  }
}
