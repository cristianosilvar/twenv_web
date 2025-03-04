import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

import type { ISpending } from '../types';

export interface IDeleteSpendingService {
  exec: (id: string) => Promise<ApiResponseModel>;
}

export class DeleteSpendingService implements IDeleteSpendingService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(id: string) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel,
      ISpending
    >({
      endpoint: endpointsEnum.SPENDING.DELETE.replace('{id}', id),
      method: HttpMethod.DELETE,
    });

    return response;
  }
}
