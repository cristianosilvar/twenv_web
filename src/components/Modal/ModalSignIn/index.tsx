import { ReactNode } from 'react'
import {
  Box,
  Button,
  GridItem,
  DialogRoot,
  DialogRootProps,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  SimpleGrid,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'

import services from '@/services'
import { useAuth } from '@/context/authContext'

import { InputPassword } from '@/components/Inputs/InputPassword'
import { InputText } from '@/components/Inputs/InputText/InputText'

import { ResponseInterface } from '@/interfaces/response'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaSignIn } from '@/schemas/schemaSignIn'
import { toaster } from '@/components/ui/toaster'

interface IModalRegister extends Omit<DialogRootProps, 'isOpen' | 'onClose'> {
  children: ReactNode
  title?: string
  buttonWidth?: any
  buttonHeight?: any
}

const ModalSignIn = ({
  children,
  title,
  buttonWidth = 'full',
  buttonHeight = 'full',
  ...props
}: IModalRegister) => {
  const { open, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const methods = useForm({
    resolver: zodResolver(schemaSignIn),
  })

  const { signin } = useAuth()

  const { handleSubmit } = methods

  const handleSignIn = handleSubmit(
    async data => {
      const response = await services.post<
        void,
        ResponseInterface<{ token: string }>
      >('v1/user/signin', data)

      if (response) {
        if (response?.message) {
          const id = 'errToast'

          if (!toaster.isVisible(id)) {
            toaster.create({
              id,
              title: 'Tente novamente',
              description: response.message,
              type: 'error',
              duration: 5000,
              placement: 'top-end',
            })
          }
        }
        if (response?.sucess && response?.data) {
          signin(response.data?.token)

          onClose()
          navigate('/')

          window.location.reload()
        }
      }
    },
    ({ value }) => {
      console.log(value)
      const toastId = 'errMessage'
      const errMessage = value?.message as string
      const toastIsActive = toaster.isVisible(toastId)

      if (!toastIsActive) {
        toaster.create({
          id: toastId,
          description: errMessage,
          type: 'warning',
          duration: 5000,
          placement: 'top-end',
        })
      }
    }
  )

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
              <Button onClick={() => handleSignIn()}>Entre na sua conta</Button>
              <Button onClick={onClose}>Voltar</Button>
            </VStack>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </>
  )
}

export default ModalSignIn
