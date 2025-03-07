import { useMemo } from 'react';

import { HttpClient } from '@/shared/api';

import { SignUpService } from '../api';
import { useSignUpModel } from '../model';

import { SignUp } from './sign-up';

export const SignUpPage = () => {
  const http = useMemo(() => new HttpClient(), []);
  const signUpService = useMemo(() => new SignUpService(http), [http]);

  const methods = useSignUpModel({ signUpService });

  return <SignUp {...methods} />;
};
