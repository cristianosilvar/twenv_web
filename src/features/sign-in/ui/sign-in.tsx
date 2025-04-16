import { Box, GridItem, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FormProvider } from 'react-hook-form';

import { Button, InputPassword, InputText } from '@/shared/ui';
import { Logo } from '@/shared/ui/icons';

import type { useSignInModel } from '../model/use-sign-in';

type SignInProps = ReturnType<typeof useSignInModel>;

export const SignIn = (props: SignInProps) => {
  const { form, handleSignIn, handleRedirectToSignUp } = props;

  return (
    <Box width="full" maxW="400px" mx="auto" pt={10}>
      <VStack gap={4} px={{ base: 4, sm: 0 }}>
        <Logo boxSize="120px" />
        <FormProvider {...form}>
          <SimpleGrid width="full" columns={12} gap={6}>
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
        <VStack w="full" gap={4}>
          <Button width="full" variant="primary" onClick={() => handleSignIn()}>
            Entre na sua conta
          </Button>
          <Text fontSize="sm" display="inline" textAlign="center">
            Não tem conta?
            <Text
              color="blue.500"
              textDecoration="underline"
              display="inline"
              ml={2}
              cursor="pointer"
              onClick={() => handleRedirectToSignUp()}
            >
              Fazer nova conta
            </Text>
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};
