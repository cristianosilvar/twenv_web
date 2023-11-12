import { Link } from 'react-router-dom'
import { Logo } from '../../icons/index'

import { Box, Center } from '@chakra-ui/react'
import Navbar from '../Navbar'

export default function Header() {
  return (
    <>
      <Box w="80%" mx="auto">
        <Center>
          <Link to="/">
            <Logo boxSize={'120px'} />
          </Link>
        </Center>
        <Navbar />
      </Box>
    </>
  )
}
