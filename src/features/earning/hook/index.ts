import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { toaster } from '@/shared/ui/toaster';
import services from '@/services';
import { ApiResponse } from '@/shared/types/api';
import formatDate from '@/shared/utils/format-date';

import { earningSchema } from '../schema';
import { IEarning, IEarningForm } from '../types';

const defaultValuesEarning = {
  description: '',
  value: 0,
  date: formatDate(new Date(), 'dateInput'),
};

export const useEarning = () => {
  const currentDate = new Date();

  const methods = useForm<IEarningForm>({
    resolver: zodResolver(earningSchema),
    defaultValues: defaultValuesEarning,
  });

  const { handleSubmit, reset } = methods;
  const [earnings, setEarnings] = useState<IEarning[]>();

  const onSubmit = async () => {
    handleSubmit(
      async (data) => {
        const response = await services.post<void, ApiResponse<IEarning>>(
          'v1/earning',
          {
            ...data,
            date: new Date(data.date),
          },
        );

        if (response) {
          if (response.success) {
            getEarnings();
            reset();
            // onClose()
          }
        }
      },
      ({ value }) => {
        const toastId = 'errMessage';
        const errMessage = value?.message;
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
    )();
  };

  const getEarnings = useCallback(async () => {
    const response = await services.get<void, ApiResponse<IEarning[]>>(
      'v1/earnings',
    );

    if (response) {
      if (response.message) {
        const toastId = 'errToast';

        toaster.create({
          id: toastId,
          description: response.message,
          type: 'error',
          duration: 5000,
          placement: 'top-end',
        });
      }
      if (response.success) {
        setEarnings(response.data);
      }
    }
  }, []);

  const deleteEarning = useCallback(
    async (id: string | undefined) => {
      if (!id) return;

      const response = await services.delete<void, ApiResponse>(
        `v1/earning/${id}`,
      );

      if (response) {
        if (response.success) {
          getEarnings();
        }
      }
    },
    [getEarnings],
  );

  const handleUpdate = useCallback(
    async (onClose: () => void, data: any, id: string) => {
      const response = await services.put<void, ApiResponse>('v1/earning', {
        ...data,
        date: new Date(data.date),
        value: Number(data.value),
        id,
      });

      if (response) {
        if (response.success) {
          getEarnings();
          onClose();
        }
      }
    },
    [getEarnings],
  );

  const handleCancel = useCallback((onClose?: () => void) => {
    if (onClose) {
      onClose();
    }
  }, []);

  useEffect(() => {
    getEarnings();
  }, [getEarnings]);

  return {
    earnings,
    handleCancel,
    handleSubmit,
    handleUpdate,
    deleteEarning,
    currentDate,
    onSubmit,
  };
};
