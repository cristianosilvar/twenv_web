import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import type { z } from 'zod';

import { routesEnum } from '@/shared/config';
import { useAuth } from '@/shared/lib';
import { toaster } from '@/shared/ui';

import type { ISignInService } from '../api/sign-in';

import { signInSchema } from './schema';

type UseSignInModelParams = { signInService: ISignInService };

export const useSignInModel = (params: UseSignInModelParams) => {
  const { signInService } = params;

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const { signin } = useAuth();

  const { handleSubmit } = form;

  const handleSignIn = handleSubmit(async (data) => {
    const response = await signInService.exec(data);

    if (response) {
      if (response?.message) {
        const id = 'errToast';
        if (!toaster.isVisible(id)) {
          toaster.create({
            id,
            title: 'Tente novamente',
            description: response.message,
            type: 'error',
            duration: 5000,
            placement: 'top-end',
          });
        }
      }

      if (response?.success && response?.data) {
        signin(response.data?.token);
        navigate(routesEnum.DASHBOARD);
        window.location.reload();
      }
    }
  });

  const handleRedirectToSignUp = () => {
    navigate(routesEnum.SIGN_UP);
  };

  return { form, handleSignIn, handleRedirectToSignUp };
};
