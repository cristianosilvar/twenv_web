import { endpointsEnum } from '@/constants/endpoints';
import { HttpMethod, IHttpClient } from '@/services/http-client/http-client';
import { ApiResponse } from '@/types/api';

import { ISpending } from '../types';

export interface IDeleteSpendingService {
  exec: (id: string) => Promise<ApiResponse>;
}

export class DeleteSpendingService implements IDeleteSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(id: string) {
    const response = await this.httpClient.sendRequest<ApiResponse, ISpending>({
      endpoint: endpointsEnum.SPENDING.DELETE.replace('{id}', id),
      method: HttpMethod.DELETE,
    });

    return response;
  }
}
