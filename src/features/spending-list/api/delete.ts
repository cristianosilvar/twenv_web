import type { SpendingModel } from '@/entities/spending';
import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

export interface IDeleteSpendingService {
  exec: (id: string) => Promise<ApiResponseModel>;
}

export class DeleteSpendingService implements IDeleteSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(id: string) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel,
      SpendingModel
    >({
      endpoint: endpointsEnum.SPENDING.DELETE.replace('{id}', id),
      method: HttpMethod.DELETE,
    });

    return response;
  }
}
