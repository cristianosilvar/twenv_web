import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { IconArrowDown, IconArrowUp, IconDashboard } from '../../icons'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Flex
      width="-webkit-fit-content"
      bgColor="#513BD915"
      borderRadius="md"
      fontWeight="500"
      overflow="hidden"
      sx={{
        '& > div': {
          cursor: 'pointer',
        },
      }}
    >
      <Box fontWeight="600" onClick={() => navigate('/')}>
        <Box h="6px" w="full" bgColor="#513BD9"></Box>
        <HStack px="6" py="3" gap="10px">
          <Icon as={IconDashboard} boxSize="20px" />
          <Text>Início</Text>
        </HStack>
      </Box>
      <Box opacity={0.5} onClick={() => navigate('/spendings')}>
        <Box h="6px" w="full" bgColor="#513BD9" opacity={0}></Box>
        <HStack px="6" py="3" gap="10px">
          <Icon as={IconArrowDown} boxSize="20px" />
          <Text>Despesas</Text>
        </HStack>
      </Box>
      <Box opacity={0.5} onClick={() => navigate('/earnings')}>
        <Box h="6px" w="full" bgColor="#513BD9" opacity={0}></Box>
        <HStack px="6" py="3" gap="10px">
          <Icon as={IconArrowUp} boxSize="20px" />
          <Text>Ganhos</Text>
        </HStack>
      </Box>
    </Flex>
  )
}

export default Navbar
