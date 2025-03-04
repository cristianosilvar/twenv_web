import type { EarningModel } from '@/entities/earning';
import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

export interface ICreateEarningService {
  exec: (body: EarningModel) => Promise<ApiResponseModel>;
}

export class CreateEarningService implements ICreateEarningService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: EarningModel) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel,
      EarningModel
    >({
      endpoint: endpointsEnum.EARNING.CREATE,
      method: HttpMethod.POST,
      body,
    });

    return response;
  }
}
