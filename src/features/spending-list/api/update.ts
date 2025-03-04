import type { SpendingModel } from '@/entities/spending';
import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

export interface IUpdateSpendingService {
  exec: (body: SpendingModel) => Promise<ApiResponseModel>;
}

export class UpdateSpendingService implements IUpdateSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: SpendingModel) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel,
      SpendingModel
    >({
      endpoint: endpointsEnum.SPENDING.UPDATE,
      method: HttpMethod.PUT,
      body,
    });

    return response;
  }
}
