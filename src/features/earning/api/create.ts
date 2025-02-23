import type { IHttpClient } from '@/shared/api/http-client/http-client';
import { HttpMethod } from '@/shared/api/http-client/http-client';
import { endpointsEnum } from '@/shared/constants/endpoints';
import type { ApiResponse } from '@/shared/types/api';

import type { IEarning } from '../types';

export interface ICreateEarningService {
  exec: (body: IEarning) => Promise<ApiResponse>;
}

export class CreateEarningService implements ICreateEarningService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: IEarning) {
    const response = await this.httpClient.sendRequest<ApiResponse, IEarning>({
      endpoint: endpointsEnum.EARNING.CREATE,
      method: HttpMethod.POST,
      body,
    });

    return response;
  }
}
