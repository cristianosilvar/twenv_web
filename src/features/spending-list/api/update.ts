import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

import type { ISpending } from '../types';

export interface IUpdateSpendingService {
  exec: (body: ISpending) => Promise<ApiResponseModel>;
}

export class UpdateSpendingService implements IUpdateSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: ISpending) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel,
      ISpending
    >({
      endpoint: endpointsEnum.SPENDING.UPDATE,
      method: HttpMethod.PUT,
      body,
    });

    return response;
  }
}
