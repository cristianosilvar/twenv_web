import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  GridItem,
  Button,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import CardInfo from '@/components/Card/CardInfo';
import ModalDefault from '@/components/Modal';
import { toaster } from '@/components/ui/toaster';
import { IconNew } from '@/icons';
import { InfoInterface } from '@/interfaces/info';
import { ResponseInterface } from '@/interfaces/response';
import {
  schemaEarning,
  defaultValuesEarning,
  earningT,
} from '@/schemas/schemaEarning';
import services from '@/services';
import formatDate from '@/utils/formatDate';

export default function Earnings() {
  const currentDate = new Date();

  const methods = useForm<earningT>({
    resolver: zodResolver(schemaEarning),
    defaultValues: defaultValuesEarning,
  });

  const { handleSubmit, reset } = methods;
  const [earnings, setEarnings] = useState<InfoInterface[]>();

  const onSubmit = async () => {
    handleSubmit(
      async (data) => {
        const response = await services.post<
          void,
          ResponseInterface<InfoInterface>
        >('v1/earning', {
          ...data,
          date: new Date(data.date),
        });

        if (response) {
          if (response.sucess) {
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
    const response = await services.get<
      void,
      ResponseInterface<InfoInterface[]>
    >('v1/earnings');

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
      if (response.sucess) {
        setEarnings(response.data);
      }
    }
  }, []);

  const deleteSpending = useCallback(
    async (id: string | undefined) => {
      if (!id) return;

      const response = await services.delete<void, ResponseInterface>(
        `v1/earning/${id}`,
      );

      if (response) {
        if (response.sucess) {
          getEarnings();
        }
      }
    },
    [getEarnings],
  );

  const handleUpdate = useCallback(
    async (onClose: () => void, data: any, id: string) => {
      const response = await services.put<void, ResponseInterface>(
        'v1/earning',
        {
          ...data,
          date: new Date(data.date),
          value: Number(data.value),
          id,
        },
      );

      if (response) {
        if (response.sucess) {
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

  return (
    <Box w="80%" marginInline="auto" mt="30px">
      <Heading as="h2">Ganhos</Heading>
      <Text fontWeight="600" color="#fefefe50">
        {formatDate(currentDate, 'monthName')}
      </Text>
      <SimpleGrid columns={12} mt="30px" gap="4">
        {earnings?.map((earning) => (
          <CardInfo
            key={earning.id}
            data={earning}
            callback={handleUpdate}
            callbackDelete={deleteSpending}
          />
        ))}
        <GridItem colSpan={{ base: 12, sm: 1 }}>
          <FormProvider {...methods}>
            <ModalDefault
              title="Novo ganho"
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
