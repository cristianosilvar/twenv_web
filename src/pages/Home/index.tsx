import { useCallback, useEffect, useState } from 'react'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'

import services from 'services'
import formatDate from 'utils/formatDate'
import CardDashboard from 'components/Card/CardDashboard'

import { InfoInterface } from 'interfaces/info'
import { ResponseInterface } from 'interfaces/response'

export default function Home() {
  const currentDate = new Date()

  const [totalSpendings, setTotalSpendings] = useState<number>(0)
  const [totalEarnings, setTotalEarnings] = useState<number>(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const configRequest = {
    transformResponse: [
      function (data: string) {
        const dataJson: ResponseInterface<InfoInterface[]> = JSON.parse(data)

        let totalInfo = 0

        dataJson.data.forEach(info => {
          totalInfo += info.value
        })

        return { ...dataJson, data: totalInfo }
      },
    ],
  }

  const getTotalSpendings = useCallback(async () => {
    const response = await services.get<void, ResponseInterface<number>>(
      'v1/spendings',
      configRequest
    )

    if (response) {
      if (response.sucess && response.data) {
        setTotalSpendings(response.data)
      }
    }
  }, [configRequest])

  const getTotalEarnings = useCallback(async () => {
    const response = await services.get<void, ResponseInterface<number>>(
      'v1/earnings',
      configRequest
    )

    if (response) {
      if (response.sucess && response.data) {
        setTotalEarnings(response.data)
      }
    }
  }, [configRequest])

  useEffect(() => {
    getTotalEarnings()
  }, [getTotalEarnings])

  useEffect(() => {
    getTotalSpendings()
  }, [getTotalSpendings])

  return (
    <Box w="80%" marginInline="auto" mt={'30px'}>
      <Heading as="h2">Dashboard</Heading>
      <Text fontWeight="600" color="#fefefe50">
        {formatDate(currentDate, 'monthName')}
      </Text>
      <Stack
        gap={{ base: '0', md: '15px' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <CardDashboard mt="30px" type="spendings" value={totalSpendings} />
        <CardDashboard mt="30px" type="earnings" value={totalEarnings} />
      </Stack>
    </Box>
  )
}
