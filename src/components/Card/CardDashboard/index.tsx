import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { IconArrowDownRed } from '../../../icons'

const CardDashboard = () => {
  return (
    <Flex p={2} bgColor="#000000CC" w="-webkit-fit-content" align="start">
      <Box bgColor="#C52121" width="3px" height="100px" />
      <HStack>
        <Icon as={IconArrowDownRed} boxSize="30px" />
        <Text fontSize="24px" textColor="#fefefe50">
          despesas
        </Text>
      </HStack>
    </Flex>
  )
}

export default CardDashboard
