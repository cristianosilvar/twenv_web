import { Link, useNavigate } from 'react-router-dom'
import { Box, Center, Flex } from '@chakra-ui/react'
import { Logo } from 'icons/index'

import Navbar from '../Navbar'

export default function Header() {
  const navigate = useNavigate()

  return (
    <>
      <Box w="80%" marginInline="auto" zIndex={10}>
        <Center>
          <Link to="/">
            <Logo boxSize={'120px'} onClick={() => navigate('/')} />
          </Link>
        </Center>
        <Flex
          justify={{ base: 'center', sm: 'start' }}
          position={{ base: 'fixed', sm: 'static' }}
          left="50%"
          bottom="5%"
          transform={{ base: 'translate(-50%, -50%)', sm: 'none' }}
        >
          <Navbar />
        </Flex>
      </Box>
    </>
  )
}
