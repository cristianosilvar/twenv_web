import type { EarningModel } from '@/entities/earning';
import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

export interface IGetEarningByIdService {
  exec: (id: string) => Promise<ApiResponseModel<EarningModel>>;
}

export class GetEarningByIdService implements IGetEarningByIdService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(id: string) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel<EarningModel>
    >({
      endpoint: endpointsEnum.EARNING.GET_BY_ID.replace('{id}', id),
      method: HttpMethod.GET,
    });

    return response;
  }
}
