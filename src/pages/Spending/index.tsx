import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  GridItem,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconNew } from 'icons'

import ModalDefault from 'components/Modal'
import CardInfo from 'components/Card/CardInfo'

import services from 'services'
import formatDate from 'utils/formatDate'

import {
  schemaSpending,
  defaultValuesSpending,
  spendingT,
} from 'schemas/schemaSpending'
import { ResponseInterface } from 'interfaces/response'
import { InfoInterface } from 'interfaces/info'

export default function Spending() {
  const currentDate = new Date()
  const toast = useToast()

  const methods = useForm<spendingT>({
    resolver: zodResolver(schemaSpending),
    defaultValues: defaultValuesSpending,
  })

  const { handleSubmit, reset } = methods
  const [spendings, setSpendings] = useState<InfoInterface[]>()

  const onSubmit = async (onClose: () => void) => {
    handleSubmit(
      async data => {
        const response = await services.post<
          void,
          ResponseInterface<InfoInterface>
        >('v1/spending', {
          ...data,
          date: new Date(data.date),
        })

        if (response) {
          if (response.message) {
            const toastId = 'errorMessage'
            const toastIsActive = toast.isActive(toastId)

            if (!toastIsActive) {
              toast({
                id: toastId,
                description: response.message,
                status: 'error',
                duration: 5000,
                position: 'top-right',
                isClosable: false,
              })
            }
          }

          if (response.sucess) {
            getSpendings()
            reset()
            onClose()
          }
        }
      },
      ({ value }) => {
        const toastId = 'warningMessage'
        const errMessage = value?.message
        const toastIsActive = toast.isActive(toastId)

        if (!toastIsActive) {
          toast({
            id: toastId,
            description: errMessage,
            status: 'warning',
            duration: 5000,
            position: 'top-right',
            isClosable: false,
          })
        }
      }
    )()
  }

  const getSpendings = useCallback(async () => {
    const response = await services.get<
      void,
      ResponseInterface<InfoInterface[]>
    >('v1/spendings')

    if (response) {
      if (response.message) {
        const toastId = 'errorMessage'
        const toastIsActive = toast.isActive(toastId)

        if (!toastIsActive) {
          toast({
            id: toastId,
            description: response.message,
            status: 'error',
            duration: 5000,
            position: 'top-right',
            isClosable: false,
          })
        }
      }
      if (response.sucess) {
        setSpendings(response.data)
      }
    }
  }, [toast])

  const deleteSpending = useCallback(
    async (id: string | undefined) => {
      if (!id) return

      const response = await services.delete<void, ResponseInterface>(
        `v1/spending/${id}`
      )

      if (response) {
        if (response.message) {
          const toastId = 'errMessage'

          toast({
            id: toastId,
            description: response.message,
            status: 'error',
            duration: 5000,
            position: 'top-right',
            isClosable: false,
          })
        }
        if (response.sucess) {
          getSpendings()
        }
      }
    },
    [getSpendings, toast]
  )

  const handleUpdate = useCallback(
    async (onClose: () => void, data: any, id: string) => {
      const response = await services.put<void, ResponseInterface>(
        'v1/spending',
        {
          ...data,
          date: new Date(data.date),
          id,
        }
      )

      if (response) {
        if (response.sucess) {
          getSpendings()
          onClose()
        }
      }
    },
    [getSpendings]
  )

  const handleCancel = useCallback((onClose: () => void) => {
    onClose()
  }, [])

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
            key={spending.id}
            data={spending}
            callback={handleUpdate}
            callbackDelete={deleteSpending}
          />
        ))}
        <GridItem colSpan={{ base: 12, sm: 1 }}>
          <FormProvider {...methods}>
            <ModalDefault
              title="Nova despesa"
              callback={onSubmit}
              callbackCancel={handleCancel}
            >
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
