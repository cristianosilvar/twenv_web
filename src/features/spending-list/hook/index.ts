import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { formatDate } from '@/shared/lib';
import { toaster } from '@/shared/ui';

import { spendingSchema } from '../schema';
import type { ISpending, ISpendingForm } from '../types';

const defaultValuesSpending = {
  description: '',
  value: 0,
  date: formatDate(new Date(), 'dateInput'),
};

export const useSpending = () => {
  const currentDate = new Date();

  const methods = useForm<ISpendingForm>({
    resolver: zodResolver(spendingSchema),
    defaultValues: defaultValuesSpending,
  });

  const { handleSubmit, reset } = methods;
  const [spendings, setSpendings] = useState<ISpending[]>();

  const onSubmit = async () => {
    handleSubmit(
      async (data) => {
        // const response = await services.post<void, ApiResponseModel<ISpending>>(
        //   'v1/spending',
        //   {
        //     ...data,
        //     date: new Date(data.date),
        //   },
        // );
        // if (response) {
        //   if (response.message) {
        //     const toastId = 'errorMessage';
        //     const toastIsActive = toaster.isVisible(toastId);
        //     if (!toastIsActive) {
        //       toaster.create({
        //         id: toastId,
        //         description: response.message,
        //         type: 'error',
        //         duration: 5000,
        //         placement: 'top-end',
        //       });
        //     }
        //   }
        //   if (response.success) {
        //     getSpendings();
        //     reset();
        //     // onClose();
        //   }
        // }
      },
      ({ value }) => {
        const toastId = 'warningMessage';
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

  const getSpendings = useCallback(async () => {
    /* const response = await services.get<void, ApiResponseModel<ISpending[]>>(
      'v1/spendings',
    );

    if (response) {
      if (response.message) {
        const toastId = 'errorMessage';
        const toastIsActive = toaster.isVisible(toastId);

        if (!toastIsActive) {
          toaster.create({
            id: toastId,
            description: response.message,
            type: 'error',
            duration: 5000,
            placement: 'top-end',
          });
        }
      }
      if (response.success) {
        setSpendings(response.data);
      }
    } */
  }, []);

  const deleteSpending = useCallback(
    async (id: string | undefined) => {
      if (!id) return;

      /* const response = await services.delete<void, ApiResponseModel>(
        `v1/spending/${id}`,
      );

      if (response) {
        if (response.message) {
          const toastId = 'errMessage';

          toaster.create({
            id: toastId,
            description: response.message,
            type: 'error',
            duration: 5000,
            placement: 'top-end',
          });
        }
        if (response.success) {
          getSpendings();
        }
      } */
    },
    [getSpendings],
  );

  const handleUpdate = useCallback(
    async (onClose: () => void, data: any, id: string) => {
      /* const response = await services.put<void, ApiResponseModel>(
        'v1/spending',
        {
          ...data,
          date: new Date(data.date),
          id,
        },
      );

      if (response) {
        if (response.success) {
          getSpendings();
          onClose();
        }
      } */
    },
    [getSpendings],
  );

  const handleCancel = useCallback((onClose: () => void) => {
    onClose();
  }, []);

  useEffect(() => {
    getSpendings();
  }, [getSpendings]);

  return {
    spendings,
    handleCancel,
    handleSubmit,
    handleUpdate,
    deleteSpending,
    currentDate,
    onSubmit,
  };
};
