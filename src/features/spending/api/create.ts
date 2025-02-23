import type { IHttpClient } from '@/shared/api/http-client/http-client';
import { HttpMethod } from '@/shared/api/http-client/http-client';
import { endpointsEnum } from '@/shared/constants/endpoints';
import type { ApiResponse } from '@/shared/types/api';

import type { ISpending } from '../types';

export interface ICreateSpendingService {
  exec: (body: ISpending) => Promise<ApiResponse>;
}

export class CreateSpendingService implements ICreateSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: ISpending) {
    const response = await this.httpClient.sendRequest<ApiResponse, ISpending>({
      endpoint: endpointsEnum.SPENDING.CREATE,
      method: HttpMethod.POST,
      body,
    });

    return response;
  }
}
