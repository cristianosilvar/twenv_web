import {
  Box,
  SimpleGrid,
  useDisclosure,
  Heading,
  Text,
  GridItem,
  Button,
} from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { IconNew } from 'icons'

import ModalDefault from 'components/Modal'
import CardInfo from 'components/Card/CardInfo'

import formatDate from 'utils/formatDate'
import services from 'services'
import { ResponseInterface } from 'interfaces/response'
import { InfoInterface } from 'interfaces/info'

type TData = {
  id: string
  value: number
  description: string
  date: Date
}

export default function Spending() {
  /* const defaultValues = {
    descricao: 'Isso',
  }

  const methods = useForm({ defaultValues })
  const { control, handleSubmit, reset } = methods

  const { isOpen, onOpen, onClose: closeModal } = useDisclosure()
  const [spendings, setSpendings] = useState([] as TData[])

  const onSubmit = (data: any) => {
    setSpendings(prev => [...prev, data])
    onCloseModal()
  }

  const formatDateDayAndMounth = (date: Date) => {
    const dataLocal = new Date(date + 'T00:00:00')
    return format(dataLocal, 'dd/MM')
  }

  const onCloseModal = () => {
    reset(defaultValues)
    closeModal()
  } */

  //

  const [spendings, setSpendings] = useState<InfoInterface[]>()

  const getSpendings = useCallback(async () => {
    const response = await services.get<
      void,
      ResponseInterface<InfoInterface[]>
    >('spendings')

    if (response) {
      if (response.sucess && response.data) {
        setSpendings(response.data)
      }
    }
  }, [])

  const currentDate = new Date()

  const spendingEx = {
    date: new Date(),
    value: 12,
  }

  useEffect(() => {
    getSpendings()
  }, [getSpendings])

  return (
    <Box w="80%" marginInline="auto" mt={'30px'}>
      <Heading as="h2">Despesas</Heading>
      <Text fontWeight="600" color="#fefefe50">
        {formatDate(currentDate, 'monthName')}
      </Text>
      <SimpleGrid columns={12} mt="30px" spacing="4">
        {spendings?.map(spending => (
          <CardInfo data={spending} key={spending.id} />
        ))}
        <GridItem colSpan={{ base: 12, sm: 1 }}>
          <ModalDefault title="Nova despesa">
            <Button variant="new" boxSize={'full'}>
              <IconNew boxSize={'25px'} />
            </Button>
          </ModalDefault>
        </GridItem>
      </SimpleGrid>
    </Box>
  )
  /* <Main>
    
    //
    <GridItem colSpan={{ base: 12, sm: 1 }}>
          <Button w="full" height="full" bgColor="#000000CC" color="fefefe">
            +
          </Button>
        </GridItem>
        //
      <Flex gap="4" wrap="wrap">
        <Box display="flex" gap="4" flexWrap="wrap">
          {spendings?.map((spending, index) => (
            <Card />
          ))}
          <Card />
        </Box>
      </Flex>
      <Modal
        onClose={onCloseModal}
        onEsc={onCloseModal}
        size={'xl'}
        isOpen={isOpen}
      >
        <ModalOverlay />
        <ModalContent
          backgroundColor="#181D29"
          border="1px solid #ffffff15"
          borderRadius="md"
          fontFamily="'Poppins', sans-serif"
        >
          <ModalHeader
            fontSize="2xl"
            textAlign="center"
            fontWeight="semibold"
            opacity=".85"
          >
            Nova Despesa
          </ModalHeader>
          <ModalBody>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                  <SimpleGrid columns={12} spacing={6}>
                    <GridItem colSpan={12}>
                      <InputTextarea
                        placeholder={
                          'Qual o nome, descrição e/ou informação dessa despesa?'
                        }
                        label={'Descrição'}
                        size="lg"
                        resize="none"
                        control={control}
                        name={'description'}
                      />
                    </GridItem>
                    <GridItem colSpan={5}>
                      <InputNumber
                        leftElement={'R$'}
                        placeholder={'0,00'}
                        label={'Valor'}
                        size="lg"
                        isRequired
                        name={'value'}
                        control={control}
                      />
                    </GridItem>
                    <GridItem colSpan={7}>
                      <InputDate
                        placeholder={'Teste'}
                        label={'Data'}
                        size="lg"
                        control={control}
                        name={'date'}
                        isRequired
                      ></InputDate>
                    </GridItem>
                    <GridItem colSpan={12} mt={[4, 6, 8]}>
                      <ButtonPrimary
                        type="submit"
                        w={'full'}
                        size={'lg'}
                        text="Adicionar"
                      />
                      <ButtonSecondary
                        size={'lg'}
                        w={'full'}
                        mt={2}
                        text="Cancelar"
                      />
                    </GridItem>
                  </SimpleGrid>
                </InputGroup>
              </form>
            </FormProvider>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Main> */
}
