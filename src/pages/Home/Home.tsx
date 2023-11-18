import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import CardDashboard from '../../components/Card/CardDashboard'

export default function Home() {
  return (
    <Box w="80%" marginInline="auto" mt="30px">
      <Heading as="h2">Dashboard</Heading>
      <Text fontWeight="600" color="#fefefe50">
        26 de Junho, 2023
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
