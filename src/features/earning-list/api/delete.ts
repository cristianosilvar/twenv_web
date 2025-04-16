import type { EarningModel } from '@/entities/earning';
import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';
export interface IDeleteEarningService {
  exec: (id: string) => Promise<ApiResponseModel>;
}

export class DeleteEarningService implements IDeleteEarningService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(id: string) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel,
      EarningModel
    >({
      endpoint: endpointsEnum.EARNING.DELETE.replace('{id}', id),
      method: HttpMethod.DELETE,
    });

    return response;
  }
}
