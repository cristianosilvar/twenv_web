import type { EarningModel } from '@/entities/earning';
import type { IHttpClient } from '@/shared/api/http-client/http-client';
import { HttpMethod } from '@/shared/api/http-client/http-client';
import { endpointsEnum } from '@/shared/constants/endpoints';
import type { ApiResponse } from '@/shared/types/api';

export interface IGetListEarningService {
  exec: () => Promise<ApiResponse>;
}

export class GetListEarningService implements IGetListEarningService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec() {
    const response = await this.httpClient.sendRequest<
      ApiResponse,
      EarningModel
    >({
      endpoint: endpointsEnum.EARNING.GET_LIST,
      method: HttpMethod.GET,
    });

    return response;
  }
}
