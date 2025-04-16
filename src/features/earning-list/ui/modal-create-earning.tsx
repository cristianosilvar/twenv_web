import type { DialogRootProps } from '@chakra-ui/react';
import { Box, GridItem, SimpleGrid, VStack, Portal } from '@chakra-ui/react';
import type { ReactNode } from 'react';

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

interface ModalCreateEarningProps
  extends Omit<DialogRootProps, 'isOpen' | 'onClose'> {
  children: ReactNode;
  title?: string;
  buttonWidth?: any;
  buttonHeight?: any;
  callback?: () => void;
  callbackCancel?: (onClose: () => void) => void;
}

export const ModalCreateEarning = ({
  children,
  title,
  buttonWidth = 'full',
  buttonHeight = 'full',
  callback,
}: ModalCreateEarningProps) => {
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
          </DialogBody>
          <DialogFooter>
            <VStack w="full">
              <DialogActionTrigger asChild>
                <Button
                  onClick={() => {
                    if (!callback) {
                      return;
                    }

                    callback();
                  }}
                  variant="primary"
                >
                  Adicionar
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
