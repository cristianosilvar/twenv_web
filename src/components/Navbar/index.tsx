import { Flex } from '@chakra-ui/react'
import { IconArrowDown, IconArrowUp, IconDashboard } from '../../icons'

import NavItem from './NavItem'

const Navbar = () => {
  return (
    <Flex
      width="-webkit-fit-content"
      bgColor="#513BD915"
      borderRadius="md"
      fontWeight="500"
      overflow="hidden"
      backdropFilter="blur(20px)"
      css={{
        '& > div': {
          cursor: 'pointer',
        },
      }}
    >
      <NavItem path="/" name="Inicío" icon={IconDashboard} />
      <NavItem path="/spendings" name="Despesas" icon={IconArrowDown} />
      <NavItem path="/earnings" name="Ganhos" icon={IconArrowUp} />
    </Flex>
  )
}

export default Navbar
