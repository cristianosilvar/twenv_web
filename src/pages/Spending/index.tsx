import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  GridItem,
  Button,
} from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IconNew } from 'icons'

import ModalDefault from 'components/Modal'
import CardInfo from 'components/Card/CardInfo'

import services from 'services'
import formatDate from 'utils/formatDate'

import { ResponseInterface } from 'interfaces/response'
import { InfoInterface } from 'interfaces/info'

export default function Spending() {
  const currentDate = new Date()

  const methods = useForm({
    defaultValues: {
      description: '',
      value: 0,
      date: formatDate(new Date(), 'dateInput'),
    },
  })

  const { handleSubmit, reset } = methods
  const [spendings, setSpendings] = useState<InfoInterface[]>()

  const onSubmit = handleSubmit(async data => {
    const response = await services.post<
      void,
      ResponseInterface<InfoInterface>
    >('spending', {
      ...data,
      value: Number(data.value),
      date: new Date(data.date),
    })

    if (response) {
      if (response.sucess) {
        getSpendings()
        reset()
      }
    }
  })

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

  const deleteSpending = useCallback(
    async (id: string | undefined) => {
      if (!id) return

      const response = await services.delete<void, ResponseInterface>(
        `spending/${id}`
      )

      if (response) {
        if (response.sucess) {
          getSpendings()
        }
      }
    },
    [getSpendings]
  )

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
          <CardInfo
            data={spending}
            callbackDelete={deleteSpending}
            key={spending.id}
          />
        ))}
        <GridItem colSpan={{ base: 12, sm: 1 }}>
          <FormProvider {...methods}>
            <ModalDefault title="Nova despesa" onSubmit={onSubmit}>
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
