import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { IconArrowDownRed, IconArrowUpGreen } from 'icons'

import formatReal from 'utils/fomatReal'

interface ICardDashboard extends FlexProps {
  type?: 'spendings' | 'earnings'
  value: number
}

const CardDashboard = ({
  type = 'spendings',
  value = 0,
  ...props
}: ICardDashboard) => {
  return (
    <Flex
      p={2}
      bgColor={'#000000CC'}
      w={{ base: 'full', md: '-webkit-fit-content' }}
      align="start"
      minW={{ base: '0', md: '300px' }}
      {...props}
    >
      <Box
        bgColor={type === 'spendings' ? '#C52121' : '#008325'}
        width="3px"
        height="100px"
        borderRadius="md"
      />
      <VStack align="start" px="30px">
        <HStack>
          <Icon
            as={type === 'spendings' ? IconArrowDownRed : IconArrowUpGreen}
            boxSize="20px"
          />
          <Text fontSize="lg" textColor="#fefefe50">
            {type === 'spendings' ? 'despesas' : 'ganhos'}
          </Text>
        </HStack>
        <Flex gap={2} fontSize="3xl" fontWeight="extrabold">
          <Text opacity={0.5}>R$</Text> {formatReal(value)}
        </Flex>
      </VStack>
    </Flex>
  )
}

export default CardDashboard
