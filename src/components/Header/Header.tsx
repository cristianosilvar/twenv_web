import { Link, useNavigate } from 'react-router-dom'
import {
  Avatar,
  Box,
  Center,
  Circle,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { IconArrowDownMenu, Logo } from 'icons/index'

import Navbar from '../Navbar'

const MenuItems = ({ authenticatedUser }: { authenticatedUser: boolean }) => {
  return authenticatedUser ? (
    <>
      <MenuItem
        bgColor="#000"
        px={4}
        _hover={{
          bgColor: '#fefefe10',
        }}
      >
        Sair da conta
      </MenuItem>
      <MenuItem
        bgColor="#000"
        px={4}
        _hover={{
          bgColor: '#fefefe10',
        }}
      >
        Excluir
      </MenuItem>
    </>
  ) : (
    <>
      <MenuItem
        bgColor="#000"
        px={4}
        _hover={{
          bgColor: '#fefefe10',
        }}
      >
        Criar uma conta
      </MenuItem>
      <MenuItem
        bgColor="#000"
        px={4}
        _hover={{
          bgColor: '#fefefe10',
        }}
      >
        Entre na sua conta
      </MenuItem>
    </>
  )
}

const Header = () => {
  const navigate = useNavigate()

  const authenticatedUser = false

  return (
    <>
      <Box w="80%" marginInline="auto" zIndex={10}>
        <Center>
          <Link to="/">
            <Logo boxSize={'120px'} onClick={() => navigate('/')} />
          </Link>
        </Center>
        <Flex justify="space-between">
          <Flex
            justify={{ base: 'center', sm: 'start' }}
            position={{ base: 'fixed', sm: 'static' }}
            left="50%"
            bottom="5%"
            transform={{ base: 'translate(-50%, -50%)', sm: 'none' }}
          >
            <Navbar />
          </Flex>
          <Menu>
            <MenuButton>
              <HStack>
                {authenticatedUser && (
                  <Circle size="35px">
                    <Avatar w={'full'} h={'full'} borderRadius={'full'} />
                  </Circle>
                )}
                <Text color="#fefefe80">
                  {authenticatedUser ? 'username' : 'Sem usuário'}
                </Text>
                <IconArrowDownMenu boxSize="20px" color="#fefefe50" />
              </HStack>
            </MenuButton>
            <MenuList bgColor="#000" borderColor="#fefefe15" minW="min-content">
              <MenuItems authenticatedUser={authenticatedUser} />
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </>
  )
}

export default Header
