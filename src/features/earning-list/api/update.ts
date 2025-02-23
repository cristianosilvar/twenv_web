import type { EarningModel } from '@/entities/earning';
import type { IHttpClient } from '@/shared/api/http-client/http-client';
import { HttpMethod } from '@/shared/api/http-client/http-client';
import { endpointsEnum } from '@/shared/constants/endpoints';
import type { ApiResponse } from '@/shared/types/api';

export interface IUpdateEarningService {
  exec: (body: EarningModel) => Promise<ApiResponse>;
}

export class UpdateEarningService implements IUpdateEarningService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: EarningModel) {
    const response = await this.httpClient.sendRequest<
      ApiResponse,
      EarningModel
    >({
      endpoint: endpointsEnum.EARNING.UPDATE,
      method: HttpMethod.PUT,
      body,
    });

    return response;
  }
}
