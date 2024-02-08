import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  GridItem,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconNew } from 'icons'

import CardInfo from 'components/Card/CardInfo'
import ModalDefault from 'components/Modal'

import services from 'services'
import formatDate from 'utils/formatDate'

import { schemaSpending } from 'schemas/schemaInfo'
import { ResponseInterface } from 'interfaces/response'
import { InfoInterface } from 'interfaces/info'

export default function Earnings() {
  const currentDate = new Date()
  const toast = useToast()

  const methods = useForm({
    resolver: zodResolver(schemaSpending),
    defaultValues: {
      description: '',
      value: 0,
      date: formatDate(new Date(), 'dateInput'),
    },
  })

  const { handleSubmit, reset } = methods
  const [earnings, setEarnings] = useState<InfoInterface[]>()

  const onSubmit = async (onClose: () => void) => {
    handleSubmit(
      async data => {
        const response = await services.post<
          void,
          ResponseInterface<InfoInterface>
        >('earning', {
          ...data,
          date: new Date(data.date),
        })

        if (response) {
          if (response.sucess) {
            getEarnings()
            reset()
            onClose()
          }
        }
      },
      ({ value }) => {
        const toastId = 'errMessage'
        const errMessage = value?.message
        const toastIsActive = toast.isActive(toastId)

        if (!toastIsActive) {
          toast({
            id: toastId,
            description: errMessage,
            status: 'error',
            duration: 5000,
            position: 'top-right',
            isClosable: false,
          })
        }
      }
    )()
  }

  const getEarnings = useCallback(async () => {
    const response = await services.get<
      void,
      ResponseInterface<InfoInterface[]>
    >('earnings')

    if (response) {
      if (response.sucess) {
        setEarnings(response.data)
      }
    }
  }, [])

  const deleteSpending = useCallback(
    async (id: string | undefined) => {
      if (!id) return

      const response = await services.delete<void, ResponseInterface>(
        `earning/${id}`
      )

      if (response) {
        if (response.sucess) {
          getEarnings()
        }
      }
    },
    [getEarnings]
  )

  const handleUpdate = useCallback(
    async (onClose: () => void, data: any, id: string) => {
      const response = await services.put<void, ResponseInterface>('earning', {
        ...data,
        date: new Date(data.date),
        value: Number(data.value),
        id,
      })

      if (response) {
        if (response.sucess) {
          getEarnings()
          onClose()
        }
      }
    },
    [getEarnings]
  )

  const handleCancel = useCallback((onClose?: () => void) => {
    onClose && onClose()
  }, [])

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
          <CardInfo
            key={earning.id}
            data={earning}
            callback={handleUpdate}
            callbackDelete={deleteSpending}
          />
        ))}
        <GridItem colSpan={{ base: 12, sm: 1 }}>
          <FormProvider {...methods}>
            <ModalDefault
              title="Novo ganho"
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
