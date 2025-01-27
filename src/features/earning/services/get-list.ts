import { endpointsEnum } from '@/constants/endpoints';
import { HttpMethod, IHttpClient } from '@/services/http-client/http-client';
import { ApiResponse } from '@/types/api';

import { IEarning } from '../types';

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
