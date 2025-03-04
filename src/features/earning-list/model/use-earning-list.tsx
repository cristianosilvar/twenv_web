import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { type EarningModel, earningSchema } from '@/entities/earning';
import type { IGetListEarningService } from '@/shared/api';
import { toaster } from '@/shared/ui';

import type {
  IDeleteEarningService,
  IUpdateEarningService,
  ICreateEarningService,
} from '../api';

type UseEarningListModelParams = {
  createEarningService: ICreateEarningService;
  updateEarningService: IUpdateEarningService;
  deleteEarningService: IDeleteEarningService;
  getListEarningService: IGetListEarningService;
};

export const useEarningListModel = (params: UseEarningListModelParams) => {
  const {
    createEarningService,
    updateEarningService,
    deleteEarningService,
    getListEarningService,
  } = params;

  const currentDate = new Date();

  /* TODO: Add default values in useForm */
  const form = useForm<z.infer<typeof earningSchema>>({
    resolver: zodResolver(earningSchema),
  });

  const { handleSubmit, reset } = form;
  const [earningsList, setEarningsList] = useState<EarningModel[]>();

  const handleCreateEarning = async () => {
    handleSubmit(
      async (data) => {
        const response = await createEarningService.exec({
          ...data,
          date: new Date(data.date),
        });

        if (response) {
          if (response.success) {
            getEarningsList();
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

  const getEarningsList = useCallback(async () => {
    const response = await getListEarningService.exec();

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
        setEarningsList(response.data);
      }
    }
  }, [getListEarningService]);

  const handleDeleteEarning = useCallback(
    async (id: string | undefined) => {
      if (!id) {
        return;
      }

      const response = await deleteEarningService.exec(id);

      if (response) {
        if (response.success) {
          getEarningsList();
        }
      }
    },
    [deleteEarningService, getEarningsList],
  );

  const handleUpdateEarning = useCallback(
    async (onClose: () => void, data: any, id: string) => {
      const response = await updateEarningService.exec({
        ...data,
        date: new Date(data.date),
        value: Number(data.value),
        id,
      });

      if (response) {
        if (response.success) {
          getEarningsList();
          onClose();
        }
      }
    },
    [getEarningsList, updateEarningService],
  );

  const handleCancelEarning = useCallback((onClose?: () => void) => {
    if (!onClose) {
      return;
    }

    onClose();
  }, []);

  useEffect(() => {
    getEarningsList();
  }, [getEarningsList]);

  return {
    earningsList,
    form,
    currentDate,
    handleCancelEarning,
    handleCreateEarning,
    handleUpdateEarning,
    handleDeleteEarning,
  };
};
