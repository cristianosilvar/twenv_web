import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import type { z } from 'zod';

import { routesEnum } from '@/shared/config';
import { useAuth } from '@/shared/lib';
import { toaster } from '@/shared/ui';

import type { ISignUpService } from '../api';

import { signUpSchema } from './schema';

type UseSignUpModelParams = { signUpService: ISignUpService };

export const useSignUpModel = (params: UseSignUpModelParams) => {
  const { signUpService } = params;

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const { signin } = useAuth();

  const { handleSubmit } = form;

  const handleSignUp = handleSubmit(async (data) => {
    const response = await signUpService.exec(data);

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

  const handleRedirectToSignIn = () => {
    navigate(routesEnum.SIGN_IN);
  };

  return { form, handleSignUp, handleRedirectToSignIn };
};
