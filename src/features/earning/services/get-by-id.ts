import { endpointsEnum } from '@/constants/endpoints';
import { HttpMethod, IHttpClient } from '@/services/http-client/http-client';
import { ApiResponse } from '@/types/api';

import { IEarning } from '../types';

export interface IGetEarningByIdService {
  exec: (id: string) => Promise<ApiResponse>;
}

export class GetEarningByIdService implements IGetEarningByIdService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(id: string) {
    const response = await this.httpClient.sendRequest<ApiResponse, IEarning>({
      endpoint: endpointsEnum.EARNING.GET_BY_ID.replace('{id}', id),
      method: HttpMethod.GET,
    });

    return response;
  }
}
