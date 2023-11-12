import { Link } from 'react-router-dom'
import { Logo } from '../../icons/index'

import { Center } from '@chakra-ui/react'

export default function Header() {
  return (
    <Center w="80%" mx="auto">
      <Link to="/">
        <Logo boxSize={'120px'} />
      </Link>
    </Center>
  )
}
