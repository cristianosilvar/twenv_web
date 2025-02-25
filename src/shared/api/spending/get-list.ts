import type { SpendingModel } from '@/entities/spending';
import type { IHttpClient } from '@/shared/api/http-client/http-client';
import { HttpMethod } from '@/shared/api/http-client/http-client';
import { endpointsEnum } from '@/shared/constants/endpoints';
import type { ApiResponse } from '@/shared/types/api';

export interface IGetListSpendingService {
  exec: () => Promise<ApiResponse>;
}

export class GetListSpendingService implements IGetListSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec() {
    const response = await this.httpClient.sendRequest<
      ApiResponse,
      SpendingModel
    >({
      endpoint: endpointsEnum.SPENDING.GET_LIST,
      method: HttpMethod.GET,
    });

    return response;
  }
}
