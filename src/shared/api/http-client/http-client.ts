export enum HttpMethod {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete',
}

export type HttpRequest<TBody> = {
  endpoint: string;
  method: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
};

export interface IHttpClient {
  sendRequest: <TResponse, TBody = unknown>(
    request: HttpRequest<TBody>,
  ) => Promise<TResponse>;
}
