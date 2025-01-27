import { endpointsEnum } from '@/constants/endpoints';
import { HttpMethod, IHttpClient } from '@/services/http-client/http-client';
import { ApiResponse } from '@/types/api';

import { ISpending } from '../types';

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
