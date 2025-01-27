import { endpointsEnum } from '@/constants/endpoints';
import { HttpMethod, IHttpClient } from '@/services/http-client/http-client';
import { ApiResponse } from '@/types/api';

import { IEarning } from '../types';

export interface IUpdateEarningService {
  exec: (body: IEarning) => Promise<ApiResponse>;
}

export class UpdateEarningService implements IUpdateEarningService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: IEarning) {
    const response = await this.httpClient.sendRequest<ApiResponse, IEarning>({
      endpoint: endpointsEnum.EARNING.UPDATE,
      method: HttpMethod.PUT,
      body,
    });

    return response;
  }
}
