import type { SpendingModel } from '@/entities/spending';
import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

export interface IGetSpendingByIdService {
  exec: (id: string) => Promise<ApiResponseModel>;
}

export class GetSpendingByIdService implements IGetSpendingByIdService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(id: string) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel,
      SpendingModel
    >({
      endpoint: endpointsEnum.SPENDING.GET_BY_ID.replace('{id}', id),
      method: HttpMethod.GET,
    });

    return response;
  }
}
