import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { useAuth } from '@/features/authentication/context';
import { toaster } from '@/shared/ui';

export const useSignInModel = () => {
  const navigate = useNavigate();

  const form = useForm({
    // resolver: zodResolver(),
  });

  const { signin } = useAuth();

  const { handleSubmit } = form;

  const handleSignIn = handleSubmit(
    async (data) => {
      const response = await services.post<
        void,
        ApiResponse<{ token: string }>
      >('v1/user/signin', data);
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
          onClose();
          navigate(routesEnum.DASHBOARD);
          window.location.reload();
        }
      }
    },
    ({ value }) => {
      const toastId = 'errMessage';
      const errMessage = value?.message as string;
      const toastIsActive = toaster.isVisible(toastId);

      if (!toastIsActive) {
        toaster.create({
          id: toastId,
          description: errMessage,
          type: 'warning',
          duration: 5000,
          placement: 'top-end',
        });
      }
    },
  );

  return { form, handleSignIn };
};
