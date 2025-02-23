import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  GridItem,
  Button,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import CardInfo from '@/components/Card/CardInfo';
import ModalDefault from '@/components/Modal';
import { IconNew } from '@/shared/icons';
// import services from '@/services';
import type { ApiResponse } from '@/shared/types/api';
import { toaster } from '@/shared/ui/toaster';
import formatDate from '@/shared/utils/format-date';

import { spendingSchema } from '../schema';
import type { ISpending, ISpendingForm } from '../types';

const defaultValuesSpending = {
  description: '',
  value: 0,
  date: formatDate(new Date(), 'dateInput'),
};

export default function SpendingsPage() {
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
        // const response = await services.post<void, ApiResponse<ISpending>>(
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
    const response = await services.get<void, ApiResponse<ISpending[]>>(
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
    }
  }, []);

  const deleteSpending = useCallback(
    async (id: string | undefined) => {
      if (!id) return;

      const response = await services.delete<void, ApiResponse>(
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
      }
    },
    [getSpendings],
  );

  const handleUpdate = useCallback(
    async (onClose: () => void, data: any, id: string) => {
      const response = await services.put<void, ApiResponse>('v1/spending', {
        ...data,
        date: new Date(data.date),
        id,
      });

      if (response) {
        if (response.success) {
          getSpendings();
          onClose();
        }
      }
    },
    [getSpendings],
  );

  const handleCancel = useCallback((onClose: () => void) => {
    onClose();
  }, []);

  useEffect(() => {
    getSpendings();
  }, [getSpendings]);

  return (
    <Box w="80%" marginInline="auto" mt="30px">
      <Heading as="h2">Despesas</Heading>
      <Text fontWeight="600" color="#fefefe50">
        {formatDate(currentDate, 'monthName')}
      </Text>
      <SimpleGrid columns={12} mt="30px" gap="4">
        {spendings?.map((spending) => (
          <CardInfo
            key={spending.id}
            data={spending}
            callback={handleUpdate}
            callbackDelete={deleteSpending}
          />
        ))}
        <GridItem colSpan={{ base: 12 }}>
          <FormProvider {...methods}>
            <ModalDefault
              title="Nova despesa"
              callback={onSubmit}
              callbackCancel={handleCancel}
            >
              <Button boxSize="full" variant="new">
                <IconNew boxSize="25px" />
              </Button>
            </ModalDefault>
          </FormProvider>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
