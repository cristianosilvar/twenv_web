import type { SpendingModel } from '@/entities/spending';
import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

export interface ICreateSpendingService {
  exec: (body: SpendingModel) => Promise<ApiResponseModel>;
}

export class CreateSpendingService implements ICreateSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: SpendingModel) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel,
      SpendingModel
    >({
      endpoint: endpointsEnum.SPENDING.CREATE,
      method: HttpMethod.POST,
      body,
    });

    return response;
  }
}
