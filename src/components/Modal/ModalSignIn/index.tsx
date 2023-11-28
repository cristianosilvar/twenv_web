import { ReactNode } from 'react'
import {
  Box,
  Button,
  GridItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  SimpleGrid,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { FormProvider, useForm } from 'react-hook-form'

import services from 'services'
import { useAuth } from 'context/authContext'

import { InputPassword } from 'components/Inputs/InputPassword'
import { InputText } from 'components/Inputs/InputText/InputText'

import { ResponseInterface } from 'interfaces/response'

interface IModalRegister extends Omit<ModalProps, 'isOpen' | 'onClose'> {
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const methods = useForm()

  const { signin } = useAuth()

  const { handleSubmit } = methods

  const handleSignIn = handleSubmit(async data => {
    const response = await services.post<
      void,
      ResponseInterface<{ token: string }>
    >('user/signin', data)

    if (response) {
      if (response.sucess && response.data) {
        signin(response.data.token)

        onClose()
        navigate('/')

        window.location.reload()
      }

      if (!response.sucess) {
        console.error(response.message)
      }
    }
  })

  return (
    <>
      <Box w={buttonWidth} h={buttonHeight} onClick={onOpen}>
        {children}
      </Box>
      <Modal
        {...props}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay bgColor="#00040750" backdropFilter="blur(5px)" />
        <ModalContent bgColor="#000407" border="1px solid #fefefe15">
          <ModalHeader textAlign="center">{title}</ModalHeader>
          <ModalBody pb={6}>
            <FormProvider {...methods}>
              <SimpleGrid columns={12} spacing={6}>
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
          </ModalBody>
          <ModalFooter>
            <VStack w="full">
              <Button variant="primary" onClick={() => handleSignIn()}>
                Entre na sua conta
              </Button>
              <Button variant="secondary" onClick={onClose}>
                Voltar
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalSignIn
