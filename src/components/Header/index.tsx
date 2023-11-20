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
import ModalRegister from 'components/Modal/ModalRegister'
import ModalSignIn from 'components/Modal/ModalSignIn'

const MenuItems = ({ authenticatedUser }: { authenticatedUser: boolean }) => {
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('user-id')
    localStorage.removeItem('username')
    localStorage.removeItem('email')

    navigate('/')

    window.location.reload()
  }

  return authenticatedUser ? (
    <>
      <MenuItem
        bgColor="#000"
        px={4}
        _hover={{
          bgColor: '#fefefe10',
        }}
        onClick={() => logOut()}
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
      <ModalRegister title="Criando sua conta">
        <MenuItem
          bgColor="#000"
          px={4}
          _hover={{
            bgColor: '#fefefe10',
          }}
        >
          Criar uma conta
        </MenuItem>
      </ModalRegister>
      <ModalSignIn title="Entrando na sua conta">
        <MenuItem
          bgColor="#000"
          px={4}
          _hover={{
            bgColor: '#fefefe10',
          }}
        >
          Entre na sua conta
        </MenuItem>
      </ModalSignIn>
    </>
  )
}

const Header = () => {
  const navigate = useNavigate()

  const user = {
    id: localStorage.getItem('user-id'),
    name: localStorage.getItem('username'),
    email: localStorage.getItem('email'),
  }

  const authenticatedUser = user.id ? true : false

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
                  {authenticatedUser ? user?.name : 'Sem usuário'}
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
