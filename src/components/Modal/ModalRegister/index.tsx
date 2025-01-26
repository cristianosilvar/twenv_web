import { ReactNode } from 'react'
import {
  Box,
  Button,
  GridItem,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRootProps,
  SimpleGrid,
  VStack,
  useDisclosure,
  DialogRoot,
} from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import services from '@/services'
import { useAuth } from '@/context/authContext'

import { InputPassword } from '@/components/Inputs/InputPassword'
import { InputText } from '@/components/Inputs/InputText/InputText'

import { ResponseInterface } from '@/interfaces/response'
import { defaultValuesUser, schemaUser, userT } from '@/schemas/schemaUser'
import { toaster } from '@/components/ui/toaster'

interface IModalRegister extends Omit<DialogRootProps, 'isOpen' | 'onClose'> {
  children: ReactNode
  title?: string
  buttonWidth?: any
  buttonHeight?: any
}

const ModalRegister = ({
  children,
  title,
  buttonWidth = 'full',
  buttonHeight = 'full',
  ...props
}: IModalRegister) => {
  const navigate = useNavigate()

  const { open, onOpen, onClose } = useDisclosure()
  const methods = useForm<userT>({
    resolver: zodResolver(schemaUser),
    defaultValues: defaultValuesUser,
  })

  const { signin } = useAuth()
  const { handleSubmit } = methods

  const handleRegister = handleSubmit(async data => {
    const response = await services.post<
      void,
      ResponseInterface<{ token: string }>
    >('v1/user/signup', data)

    if (response) {
      if (response?.message) {
        const id = 'errToast'

        if (!toaster.isVisible(id)) {
          toaster.create({
            id,
            title: 'Tente novamente',
            description: response.message,
          })
        }
      }
      if (response?.sucess && response?.data) {
        signin(response.data?.token)

        onClose()
        navigate('/')
      }
    }
  })

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
                    name={'username'}
                    placeholder="Nome de usuário"
                    label="Nome de usuário"
                  />
                </GridItem>
                <GridItem colSpan={12}>
                  <InputText
                    name={'email'}
                    placeholder="email@example.com"
                    label="E-mail"
                  />
                </GridItem>
                <GridItem colSpan={12}>
                  <InputPassword
                    name={'password'}
                    label="Senha"
                    placeholder="Mínimo de 6 caracteres"
                  />
                </GridItem>
              </SimpleGrid>
            </FormProvider>
          </DialogBody>
          <DialogFooter>
            <VStack w="full">
              <Button onClick={() => handleRegister()}>Criar sua conta</Button>
              <Button onClick={onClose}>Voltar</Button>
            </VStack>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </>
  )
}

export default ModalRegister
