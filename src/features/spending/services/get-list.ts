import { endpointsEnum } from '@/constants/endpoints';
import { HttpMethod, IHttpClient } from '@/services/http-client/http-client';
import { ApiResponse } from '@/types/api';

import { ISpending } from '../types';

export interface IGetListSpendingService {
  exec: () => Promise<ApiResponse>;
}

export class GetListSpendingService implements IGetListSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec() {
    const response = await this.httpClient.sendRequest<ApiResponse, ISpending>({
      endpoint: endpointsEnum.SPENDING.GET_LIST,
      method: HttpMethod.GET,
    });

    return response;
  }
}
