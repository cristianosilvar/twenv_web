import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Box, Container, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { InputText } from '../../components/Inputs/InputText/InputText'
import ButtonPrimary from '../../components/Buttons/ButtonPrimary/ButtonPrimary'
import { InputPassword } from '../../components/Inputs/InputPassword'
// import useAuthentication from "../../hooks/useAuthentication";

interface IData {
  user: string
  email: string
  password: string
}

const RegisterUser = () => {
  // const { createUser, error: authError, loading } = useAuthentication();

  const methods = useForm()
  const { control, handleSubmit } = methods

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data: any) => {})

  // useEffect(() => {
  //   if (authError) {
  //     console.log(authError);
  //   }
  // }, [authError]);

  return <></>
  {
    /* <Container>
      <Box
        marginInline={"auto"}
        w={"full"}
        p={"2rem"}
        bgColor={"#0B0F18"}
        borderRadius={"md"}
        borderWidth={"1px"}
        borderColor={"#fefefe25"}
      >
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <VStack spacing={"1rem"}>
              <InputText
                control={control}
                name="user"
                label="Nome do usuário"
              />
              <InputText control={control} name="email" label="E-mail" />
              <InputPassword control={control} name="password" label="Senha" />
              <ButtonPrimary
                type="submit"
                w={"full"}
                mt="1rem"
                text="Cadastrar"
              />
            </VStack>
          </form>
        </FormProvider>
      </Box>
    </Container> */
  }
}

export default RegisterUser
