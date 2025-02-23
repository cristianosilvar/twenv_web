import type { IHttpClient } from '@/shared/api/http-client/http-client';
import { HttpMethod } from '@/shared/api/http-client/http-client';
import { endpointsEnum } from '@/shared/constants/endpoints';
import type { ApiResponse } from '@/shared/types/api';

import type { IEarning } from '../types';

export interface IGetListEarningService {
  exec: () => Promise<ApiResponse>;
}

export class GetListEarningService implements IGetListEarningService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec() {
    const response = await this.httpClient.sendRequest<ApiResponse, IEarning>({
      endpoint: endpointsEnum.EARNING.GET_LIST,
      method: HttpMethod.GET,
    });

    return response;
  }
}
