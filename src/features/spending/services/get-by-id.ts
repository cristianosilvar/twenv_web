import { endpointsEnum } from '@/constants/endpoints';
import { HttpMethod, IHttpClient } from '@/services/http-client/http-client';
import { ApiResponse } from '@/types/api';

import { ISpending } from '../types';

export interface IGetSpendingByIdService {
  exec: (id: string) => Promise<ApiResponse>;
}

export class GetSpendingByIdService implements IGetSpendingByIdService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(id: string) {
    const response = await this.httpClient.sendRequest<ApiResponse, ISpending>({
      endpoint: endpointsEnum.SPENDING.GET_BY_ID.replace('{id}', id),
      method: HttpMethod.GET,
    });

    return response;
  }
}
