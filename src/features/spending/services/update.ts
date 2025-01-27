import { endpointsEnum } from '@/constants/endpoints';
import { HttpMethod, IHttpClient } from '@/services/http-client/http-client';
import { ApiResponse } from '@/types/api';

import { ISpending } from '../types';

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
