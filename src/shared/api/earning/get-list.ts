import type { EarningModel } from '@/entities/earning';
import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

export interface IGetListEarningService {
  exec: () => Promise<ApiResponseModel>;
}

export class GetListEarningService implements IGetListEarningService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec() {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel,
      EarningModel
    >({
      endpoint: endpointsEnum.EARNING.GET_LIST,
      method: HttpMethod.GET,
    });

    return response;
  }
}
