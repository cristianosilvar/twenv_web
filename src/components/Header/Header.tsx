import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../../icons/index'

import { Box, Center } from '@chakra-ui/react'
import Navbar from '../Navbar'

export default function Header() {
  const navigate = useNavigate()

  return (
    <>
      <Box w="80%" mx="auto">
        <Center>
          <Link to="/">
            <Logo boxSize={'120px'} onClick={() => navigate('/')} />
          </Link>
        </Center>
        <Navbar />
      </Box>
    </>
  )
}
