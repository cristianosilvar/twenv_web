import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  GridItem,
  Button,
} from '@chakra-ui/react'
import CardInfo from 'components/Card/CardInfo'
import { IconNew } from 'icons'

import formatDate from 'utils/formatDate'

export default function Earnings() {
  const currentDate = new Date()

  const earningEx = {
    date: new Date(),
    description: 'Teste',
    value: 212.2,
  }

  return (
    <Box w="80%" marginInline="auto" mt={{ base: 0, sm: '30px' }}>
      <Heading as="h2">Despesas</Heading>
      <Text fontWeight="600" color="#fefefe50">
        {formatDate(currentDate)}
      </Text>
      <SimpleGrid columns={12} mt="30px" spacing="4">
        <CardInfo data={earningEx} />
        <GridItem colSpan={{ base: 12, sm: 1 }}>
          <Button variant="new" boxSize={'full'}>
            <IconNew boxSize={'25px'} />
          </Button>
        </GridItem>
      </SimpleGrid>
    </Box>
  )
}
