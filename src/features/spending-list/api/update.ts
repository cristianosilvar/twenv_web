import type { IHttpClient } from '@/shared/api/http-client/http-client';
import { HttpMethod } from '@/shared/api/http-client/http-client';
import { endpointsEnum } from '@/shared/constants/endpoints';
import type { ApiResponse } from '@/shared/types/api';

import type { ISpending } from '../types';

export interface IUpdateSpendingService {
  exec: (body: ISpending) => Promise<ApiResponse>;
}

export class UpdateSpendingService implements IUpdateSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: ISpending) {
    const response = await this.httpClient.sendRequest<ApiResponse, ISpending>({
      endpoint: endpointsEnum.SPENDING.UPDATE,
      method: HttpMethod.PUT,
      body,
    });

    return response;
  }
}
