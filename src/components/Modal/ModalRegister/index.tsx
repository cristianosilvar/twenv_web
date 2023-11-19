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
import { FormProvider, useForm } from 'react-hook-form'

import InputDate from 'components/Inputs/InputDate/InputDate'
import InputNumber from 'components/Inputs/InputNumber/InputNumber'
import InputTextarea from 'components/Inputs/InputTextarea/InputTextarea'

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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const methods = useForm()

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
                  <InputTextarea
                    name={'desc'}
                    placeholder="Qual o nome, descrição e/ou informação 
                dessa despesa?"
                  />
                </GridItem>
                <GridItem colSpan={6}>
                  <InputNumber
                    name={'value'}
                    label="Valor"
                    leftElement="R$"
                    isRequired
                  />
                </GridItem>
                <GridItem colSpan={6}>
                  <InputDate name="date" label="Data" isRequired />
                </GridItem>
              </SimpleGrid>
            </FormProvider>
          </ModalBody>
          <ModalFooter>
            <VStack w="full">
              <Button variant="primary">Adicionar</Button>
              <Button variant="secondary" onClick={onClose}>
                Cancelar
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalRegister
