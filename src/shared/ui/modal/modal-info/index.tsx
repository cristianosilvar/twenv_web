import type { DialogRootProps } from '@chakra-ui/react';
import {
  Box,
  Button,
  GridItem,
  SimpleGrid,
  VStack,
  Portal,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { InputNumber, InputTextarea, InputDate } from '@/shared/ui';
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

interface ModalInfoProps extends Omit<DialogRootProps, 'isOpen' | 'onClose'> {
  children: ReactNode;
  title?: string;
  buttonWidth?: any;
  buttonHeight?: any;
  callback?: () => void;
  callbackCancel?: (onClose: () => void) => void;
}

export const ModalInfo = ({
  children,
  title,
  buttonWidth = 'full',
  buttonHeight = 'full',
  callback,
}: ModalInfoProps) => {
  return (
    <DialogRoot placement="center" size="md" closeOnInteractOutside={false}>
      <DialogTrigger>
        <Box w={buttonWidth} h={buttonHeight}>
          {children}
        </Box>
      </DialogTrigger>
      <Portal>
        <DialogContent bgColor="#000407" border="1px solid #fefefe15">
          <DialogHeader textAlign="center">
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <DialogBody pb={6}>
            <SimpleGrid columns={12} gap={6}>
              <GridItem colSpan={12}>
                <InputTextarea
                  name="description"
                  placeholder="Qual o nome, descrição e/ou informação 
                dessa despesa?"
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
              <Button
                onClick={() => {
                  if (callback) {
                    callback();
                  }
                }}
              >
                Adicionar
              </Button>
              <DialogActionTrigger asChild>
                <Button>Cancelar</Button>
              </DialogActionTrigger>
            </VStack>
          </DialogFooter>
        </DialogContent>
      </Portal>
    </DialogRoot>
  );
};
