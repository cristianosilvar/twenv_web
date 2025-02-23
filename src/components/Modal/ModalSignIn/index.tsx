import type { DialogRootProps } from '@chakra-ui/react';
import {
  Box,
  Button,
  GridItem,
  DialogRoot,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  SimpleGrid,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { InputPassword } from '@/components/Inputs/InputPassword';
import { InputText } from '@/components/Inputs/InputText/InputText';
import { useAuth } from '@/features/auth/context';
import { signInSchema } from '@/features/auth/schemas';
import { routesEnum } from '@/shared/constants/routes';
// import services from '@/services';
import { ApiResponse } from '@/shared/types/api';
import { toaster } from '@/shared/ui/toaster';

interface IModalRegister extends Omit<DialogRootProps, 'isOpen' | 'onClose'> {
  children: ReactNode;
  title?: string;
  buttonWidth?: any;
  buttonHeight?: any;
}

const ModalSignIn = ({
  children,
  title,
  buttonWidth = 'full',
  buttonHeight = 'full',
  ...props
}: IModalRegister) => {
  const { open, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const methods = useForm({
    resolver: zodResolver(signInSchema),
  });

  const { signin } = useAuth();

  const { handleSubmit } = methods;

  const handleSignIn = handleSubmit(
    async (data) => {
      // const response = await services.post<
      //   void,
      //   ApiResponse<{ token: string }>
      // >('v1/user/signin', data);
      // if (response) {
      //   if (response?.message) {
      //     const id = 'errToast';
      //     if (!toaster.isVisible(id)) {
      //       toaster.create({
      //         id,
      //         title: 'Tente novamente',
      //         description: response.message,
      //         type: 'error',
      //         duration: 5000,
      //         placement: 'top-end',
      //       });
      //     }
      //   }
      //   if (response?.success && response?.data) {
      //     signin(response.data?.token);
      //     onClose();
      //     navigate(routesEnum.DASHBOARD);
      //     window.location.reload();
      //   }
      // }
    },
    ({ value }) => {
      const toastId = 'errMessage';
      const errMessage = value?.message as string;
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
  );

  return (
    <>
      <Box w={buttonWidth} h={buttonHeight} onClick={onOpen}>
        {children}
      </Box>
      <DialogRoot
        open={open}
        closeOnEscape
        closeOnInteractOutside={false}
        {...props}
      >
        <DialogContent>
          <DialogHeader textAlign="center">{title}</DialogHeader>
          <DialogBody pb={6}>
            <FormProvider {...methods}>
              <SimpleGrid columns={12} gap={6}>
                <GridItem colSpan={12}>
                  <InputText
                    name="email"
                    placeholder="email@example.com"
                    label="E-mail"
                  />
                </GridItem>
                <GridItem colSpan={12}>
                  <InputPassword
                    name="password"
                    label="Senha"
                    placeholder="Mínimo de 6 caracteres"
                  />
                </GridItem>
              </SimpleGrid>
            </FormProvider>
          </DialogBody>
          <DialogFooter>
            <VStack w="full">
              <Button onClick={() => handleSignIn()}>Entre na sua conta</Button>
              <Button onClick={onClose}>Voltar</Button>
            </VStack>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default ModalSignIn;
