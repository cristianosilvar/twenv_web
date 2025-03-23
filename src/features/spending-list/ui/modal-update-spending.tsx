import type { DialogRootProps } from '@chakra-ui/react';
import { Box, GridItem, SimpleGrid, VStack, Portal } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, type ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type { z } from 'zod';

import { type SpendingModel, spendingSchema } from '@/entities/spending';
import { formatDate } from '@/shared/lib';
import { InputNumber, InputTextarea, InputDate, Button } from '@/shared/ui';
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogActionTrigger,
} from '@/shared/ui/dialog';

interface ModalUpdateSpendingProps
  extends Omit<DialogRootProps, 'isOpen' | 'onClose'> {
  children: ReactNode;
  spending: SpendingModel;
  title?: string;
  buttonWidth?: any;
  buttonHeight?: any;
  callback?: (data: z.infer<typeof spendingSchema>) => void;
  callbackCancel?: (onClose: () => void) => void;
}

export const ModalUpdateSpending = ({
  children,
  title = 'Alterar despesa',
  spending,
  buttonWidth = 'full',
  buttonHeight = 'full',
  callback,
}: ModalUpdateSpendingProps) => {
  const form = useForm<z.infer<typeof spendingSchema>>({
    resolver: zodResolver(spendingSchema),
  });

  useEffect(() => {
    form.reset({
      ...spending,
      date: formatDate(spending.date, 'dateInput'),
    });
  }, [spending, form]);

  return (
    <DialogRoot
      placement="center"
      size="md"
      closeOnInteractOutside={false}
      unmountOnExit
    >
      <DialogTrigger>
        <Box w={buttonWidth} h={buttonHeight}>
          {children}
        </Box>
      </DialogTrigger>
      <Portal>
        <DialogContent
          bgColor="#000407"
          border="1px solid #fefefe15"
          borderRadius="lg"
        >
          <DialogHeader textAlign="center">
            <DialogTitle color="#ffffff75" fontSize="24px">
              {title}
            </DialogTitle>
          </DialogHeader>
          <DialogBody py={6}>
            <FormProvider {...form}>
              <SimpleGrid columns={12} gap={6}>
                <GridItem colSpan={12}>
                  <InputTextarea
                    name="description"
                    placeholder="Qual o nome, descrição e/ou informação desse ganho?"
                    minHeight="124px"
                  />
                </GridItem>
                <GridItem colSpan={6}>
                  <InputNumber
                    name="value"
                    label="Valor"
                    leftElement="R$"
                    isRequired
                  />
                </GridItem>
                <GridItem colSpan={6}>
                  <InputDate name="date" label="Data" isRequired />
                </GridItem>
              </SimpleGrid>
            </FormProvider>
          </DialogBody>
          <DialogFooter>
            <VStack w="full">
              <DialogActionTrigger asChild>
                <Button
                  onClick={() => {
                    if (!callback) {
                      return;
                    }

                    form.handleSubmit(callback)();
                  }}
                  variant="primary"
                >
                  Alterar
                </Button>
              </DialogActionTrigger>
              <DialogActionTrigger asChild>
                <Button variant="secondary">Cancelar</Button>
              </DialogActionTrigger>
            </VStack>
          </DialogFooter>
        </DialogContent>
      </Portal>
    </DialogRoot>
  );
};
