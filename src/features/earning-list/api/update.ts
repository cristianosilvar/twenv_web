import type { EarningModel } from '@/entities/earning';
import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

export interface IUpdateEarningService {
  exec: (body: EarningModel) => Promise<ApiResponseModel>;
}

export class UpdateEarningService implements IUpdateEarningService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: EarningModel) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel,
      EarningModel
    >({
      endpoint: endpointsEnum.EARNING.UPDATE,
      method: HttpMethod.PUT,
      body,
    });

    return response;
  }
}
