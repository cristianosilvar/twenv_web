import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

import type { ISpending } from '../types';

export interface ICreateSpendingService {
  exec: (body: ISpending) => Promise<ApiResponseModel>;
}

export class CreateSpendingService implements ICreateSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: ISpending) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel,
      ISpending
    >({
      endpoint: endpointsEnum.SPENDING.CREATE,
      method: HttpMethod.POST,
      body,
    });

    return response;
  }
}
