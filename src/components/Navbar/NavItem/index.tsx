import {
  Box,
  ComponentWithAs,
  HStack,
  Icon,
  IconProps,
  Show,
  Text,
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

interface INavItem {
  path: string
  name: string
  icon: ComponentWithAs<'svg', IconProps>
}

const NavItem = ({ path, name, icon }: INavItem) => {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = location.pathname === path

  return (
    <Box
      opacity={isActive ? 1 : 0.5}
      fontWeight="600"
      onClick={() => navigate(path)}
    >
      <Box h="6px" w="full" bgColor="#513BD9" opacity={isActive ? 1 : 0} />
      <HStack px="6" py="3" gap="10px">
        <Icon as={icon} boxSize="20px" />
        <Show breakpoint="(min-width: 600px )">
          <Text>{name}</Text>
        </Show>
      </HStack>
    </Box>
  )
}

export default NavItem
