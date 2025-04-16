import type { DialogRootProps } from '@chakra-ui/react';
import { Box, GridItem, SimpleGrid, VStack, Portal } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, type ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type { z } from 'zod';

import { type EarningModel, earningSchema } from '@/entities/earning';
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

interface ModalUpdateEarningProps
  extends Omit<DialogRootProps, 'isOpen' | 'onClose'> {
  children: ReactNode;
  earning: EarningModel;
  title?: string;
  buttonWidth?: any;
  buttonHeight?: any;
  callback?: (data: z.infer<typeof earningSchema>) => void;
  callbackCancel?: (onClose: () => void) => void;
}

export const ModalUpdateEarning = ({
  children,
  title = 'Alterar ganho',
  earning,
  buttonWidth = 'full',
  buttonHeight = 'full',
  callback,
}: ModalUpdateEarningProps) => {
  const form = useForm<z.infer<typeof earningSchema>>({
    resolver: zodResolver(earningSchema),
  });

  useEffect(() => {
    form.reset({
      ...earning,
      date: formatDate(earning.date, 'dateInput'),
    });
  }, [earning, form]);

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
