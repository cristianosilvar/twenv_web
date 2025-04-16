import type { z } from 'zod';

import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

import type { signInSchema } from '../model';

type Params = z.infer<typeof signInSchema>;

export interface ISignInService {
  exec: (body: Params) => Promise<ApiResponseModel<{ token: string }>>;
}

export class SignInService implements ISignInService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: Params) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel<{ token: string }>,
      Params
    >({
      endpoint: endpointsEnum.SIGN_IN,
      method: HttpMethod.POST,
      body,
    });

    return response;
  }
}
