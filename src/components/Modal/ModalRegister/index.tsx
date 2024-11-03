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
  useToast,
} from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import services from 'services'
import { useAuth } from 'context/authContext'

import { InputPassword } from 'components/Inputs/InputPassword'
import { InputText } from 'components/Inputs/InputText/InputText'

import { ResponseInterface } from 'interfaces/response'
import { defaultValuesUser, schemaUser, userT } from 'schemas/schemaUser'

interface IModalRegister extends Omit<ModalProps, 'isOpen' | 'onClose'> {
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
  const toast = useToast()
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()
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

        if (!toast.isActive(id)) {
          toast({
            id,
            title: 'Tente novamente',
            description: response.message,
            status: 'error',
            duration: 5000,
            position: 'top-right',
            isClosable: false,
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
          </ModalBody>
          <ModalFooter>
            <VStack w="full">
              <Button variant="primary" onClick={() => handleRegister()}>
                Criar sua conta
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

export default ModalRegister
