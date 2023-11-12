import { Box, Button, Divider, Flex } from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const navigateTo = (path: string) => {
    navigate(path)
  }
  return (
    <Flex
      bgColor="#513BD915"
      borderRadius="md"
      fontWeight="500"
      width="-webkit-fit-content"
      overflow="hidden"
      sx={{
        '& > div': {
          cursor: 'pointer',
        },
      }}
    >
      <Box fontWeight="600" onClick={() => navigateTo('/')}>
        <Box h="6px" w="full" bgColor="#513BD9"></Box>
        <Box px="8" py="3">
          Início
        </Box>
      </Box>
      <Box opacity={0.5} onClick={() => navigateTo('/spendings')}>
        <Box h="6px" w="full" bgColor="#513BD9" opacity={0}></Box>
        <Box px="8" py="3">
          Despesas
        </Box>
      </Box>
      <Box opacity={0.5} onClick={() => navigateTo('/earnings')}>
        <Box h="6px" w="full" bgColor="#513BD9" opacity={0}></Box>
        <Box px="8" py="3">
          Ganhos
        </Box>
      </Box>
    </Flex>
  )
}

export default Navbar
