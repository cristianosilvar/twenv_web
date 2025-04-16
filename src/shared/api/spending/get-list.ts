import type { SpendingModel } from '@/entities/spending';
import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

export interface IGetListSpendingService {
  exec: () => Promise<ApiResponseModel<SpendingModel[]>>;
}

export class GetListSpendingService implements IGetListSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec() {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel<SpendingModel[]>
    >({
      endpoint: endpointsEnum.SPENDING.GET_LIST,
      method: HttpMethod.GET,
    });

    return response;
  }
}
