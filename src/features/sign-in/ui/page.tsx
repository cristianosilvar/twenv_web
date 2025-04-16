import { useMemo } from 'react';

import { HttpClient } from '@/shared/api';

import { SignInService } from '../api';
import { useSignInModel } from '../model';

import { SignIn } from './sign-in';

export const SignInPage = () => {
  const http = useMemo(() => new HttpClient(), []);
  const signInService = useMemo(() => new SignInService(http), [http]);

  const methods = useSignInModel({ signInService });

  return <SignIn {...methods} />;
};
