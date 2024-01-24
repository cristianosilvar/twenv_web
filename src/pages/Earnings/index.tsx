import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  GridItem,
  Button,
} from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IconNew } from 'icons'

import CardInfo from 'components/Card/CardInfo'
import ModalDefault from 'components/Modal'

import services from 'services'
import formatDate from 'utils/formatDate'

import { InfoInterface } from 'interfaces/info'
import { ResponseInterface } from 'interfaces/response'

export default function Earnings() {
  const currentDate = new Date()

  const methods = useForm({
    defaultValues: {
      description: '',
      value: 0,
      date: formatDate(new Date(), 'dateInput'),
    },
  })

  const { handleSubmit, reset } = methods
  const [earnings, setEarnings] = useState<InfoInterface[]>()

  const submit = handleSubmit(async data => {
    const response = await services.post<
      void,
      ResponseInterface<InfoInterface>
    >('earning', {
      ...data,
      value: Number(data.value),
      date: new Date(data.date),
    })

    if (response) {
      if (response.sucess) {
        reset()
        getEarnings()
      }
    }
  })

  const onSubmit = (onClose?: () => void) => {
    submit()

    if (onClose) {
      onClose()
    }
  }

  const getEarnings = useCallback(async () => {
    const response = await services.get<
      void,
      ResponseInterface<InfoInterface[]>
    >('earnings')

    if (response) {
      if (response.sucess && response.data) {
        setEarnings(response.data)
      }
    }
  }, [])

  //add callbackCancel com onClose

  useEffect(() => {
    getEarnings()
  }, [getEarnings])

  return (
    <Box w="80%" marginInline="auto" mt={'30px'}>
      <Heading as="h2">Ganhos</Heading>
      <Text fontWeight="600" color="#fefefe50">
        {formatDate(currentDate, 'monthName')}
      </Text>
      <SimpleGrid columns={12} mt="30px" spacing="4">
        {earnings?.map(earning => (
          <CardInfo data={earning} key={earning.id} />
        ))}
        <GridItem colSpan={{ base: 12, sm: 1 }}>
          <FormProvider {...methods}>
            <ModalDefault title="Novo ganho" callback={onSubmit}>
              <Button variant="new" boxSize={'full'}>
                <IconNew boxSize={'25px'} />
              </Button>
            </ModalDefault>
          </FormProvider>
        </GridItem>
      </SimpleGrid>
    </Box>
  )
}
