import { Box, GridItem, SimpleGrid, VStack } from '@chakra-ui/react';
import { FormProvider } from 'react-hook-form';

import { Button, InputPassword, InputText } from '@/shared/ui';

import type { useSignInModel } from '../model/use-sign-in';

type SignInProps = ReturnType<typeof useSignInModel>;

export const SignIn = (props: SignInProps) => {
  const { form, handleSignIn } = props;

  return (
    <Box>
      <FormProvider {...form}>
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

      <VStack w="full">
        <Button onClick={() => handleSignIn()}>Entre na sua conta</Button>
        <Button onClick={() => {}}>Registrar uma conta</Button>
      </VStack>
    </Box>
  );
};
