import type { z } from 'zod';

import { HttpMethod, type IHttpClient } from '@/shared/api';
import { endpointsEnum } from '@/shared/config';
import type { ApiResponseModel } from '@/shared/model';

import type { signUpSchema } from '../model';

type Params = z.infer<typeof signUpSchema>;

export interface ISignUpService {
  exec: (body: Params) => Promise<ApiResponseModel<{ token: string }>>;
}

export class SignUpService implements ISignUpService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: Params) {
    const response = await this.httpClient.sendRequest<
      ApiResponseModel<{ token: string }>,
      Params
    >({
      endpoint: endpointsEnum.SIGN_UP,
      method: HttpMethod.POST,
      body,
    });

    return response;
  }
}
