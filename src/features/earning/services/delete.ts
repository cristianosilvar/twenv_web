import { endpointsEnum } from '@/constants/endpoints';
import { HttpMethod, IHttpClient } from '@/services/http-client/http-client';
import { ApiResponse } from '@/types/api';

import { IEarning } from '../types';

export interface IDeleteEarningService {
  exec: (id: string) => Promise<ApiResponse>;
}

export class DeleteEarningService implements IDeleteEarningService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(id: string) {
    const response = await this.httpClient.sendRequest<ApiResponse, IEarning>({
      endpoint: endpointsEnum.EARNING.DELETE.replace('{id}', id),
      method: HttpMethod.DELETE,
    });

    return response;
  }
}
