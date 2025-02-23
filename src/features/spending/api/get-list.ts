import type { IHttpClient } from '@/shared/api/http-client/http-client';
import { HttpMethod } from '@/shared/api/http-client/http-client';
import { endpointsEnum } from '@/shared/constants/endpoints';
import type { ApiResponse } from '@/shared/types/api';

import type { ISpending } from '../types';

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
