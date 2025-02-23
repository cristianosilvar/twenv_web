import type { EarningModel } from '@/entities/earning';
import type { IHttpClient } from '@/shared/api/http-client/http-client';
import { HttpMethod } from '@/shared/api/http-client/http-client';
import { endpointsEnum } from '@/shared/constants/endpoints';
import type { ApiResponse } from '@/shared/types/api';

export interface IGetEarningByIdService {
  exec: (id: string) => Promise<ApiResponse>;
}

export class GetEarningByIdService implements IGetEarningByIdService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(id: string) {
    const response = await this.httpClient.sendRequest<
      ApiResponse,
      EarningModel
    >({
      endpoint: endpointsEnum.EARNING.GET_BY_ID.replace('{id}', id),
      method: HttpMethod.GET,
    });

    return response;
  }
}
