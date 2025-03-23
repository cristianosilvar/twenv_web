import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { type SpendingModel, spendingSchema } from '@/entities/spending';
import type { IGetListSpendingService } from '@/shared/api';
import { toaster } from '@/shared/ui';

import type {
  ICreateSpendingService,
  IUpdateSpendingService,
  IDeleteSpendingService,
} from '../api';

type UseSpendingListModelParams = {
  createSpendingService: ICreateSpendingService;
  updateSpendingService: IUpdateSpendingService;
  deleteSpendingService: IDeleteSpendingService;
  getListSpendingService: IGetListSpendingService;
};

export const useSpendingListModel = (params: UseSpendingListModelParams) => {
  const {
    createSpendingService,
    updateSpendingService,
    deleteSpendingService,
    getListSpendingService,
  } = params;

  const currentDate = new Date();

  /* TODO: Add default values in useForm */
  const form = useForm<z.infer<typeof spendingSchema>>({
    resolver: zodResolver(spendingSchema),
  });

  const { handleSubmit, reset } = form;
  const [spendingsList, setSpendingsList] = useState<SpendingModel[]>();

  const handleCreateSpending = async () => {
    handleSubmit(async (data) => {
      const response = await createSpendingService.exec({
        ...data,
        date: new Date(data.date),
      });

      if (response) {
        if (response.success) {
          getSpendingList();
          reset();
        }
      }
    })();
  };

  const getSpendingList = useCallback(async () => {
    const response = await getListSpendingService.exec();

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
        setSpendingsList(response.data);
      }
    }
  }, [getListSpendingService]);

  const handleDeleteSpending = useCallback(
    async (id: string | undefined) => {
      if (!id) return;

      const response = await deleteSpendingService.exec(id);

      if (response) {
        if (response.success) {
          getSpendingList();
        }
      }
    },
    [deleteSpendingService, getSpendingList],
  );

  const handleUpdateSpending = useCallback(
    async (data: z.infer<typeof spendingSchema>, id: string) => {
      const response = await updateSpendingService.exec({
        ...data,
        date: new Date(data.date),
        value: Number(data.value),
        id,
      });

      if (response) {
        if (response.success) {
          getSpendingList();
        }
      }
    },
    [getSpendingList, updateSpendingService],
  );

  const handleCancelSpending = useCallback((onClose: () => void) => {
    onClose();
  }, []);

  useEffect(() => {
    getSpendingList();
  }, [getSpendingList]);

  return {
    spendingsList,
    form,
    currentDate,
    handleCancelSpending,
    handleUpdateSpending,
    handleDeleteSpending,
    handleCreateSpending,
  };
};
