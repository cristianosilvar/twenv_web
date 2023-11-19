import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import CardDashboard from 'components/Card/CardDashboard'

import formatDate from 'utils/formatDate'

export default function Home() {
  const currentDate = new Date()

  return (
    <Box w="80%" marginInline="auto" mt={{ base: 0, sm: '30px' }}>
      <Heading as="h2">Dashboard</Heading>
      <Text fontWeight="600" color="#fefefe50">
        {formatDate(currentDate)}
      </Text>
      <Stack
        gap={{ base: '0', md: '15px' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <CardDashboard mt="30px" type="spendings" />
        <CardDashboard mt="30px" type="earnings" />
      </Stack>
    </Box>
  )
}
