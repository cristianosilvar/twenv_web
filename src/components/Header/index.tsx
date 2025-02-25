import { Box, Center, Circle, Flex, HStack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

import ModalRegister from '@/components/Modal/ModalRegister';
import ModalSignIn from '@/components/Modal/ModalSignIn';
import { useAuth } from '@/features/authentication/context';
import { getDataUser } from '@/features/authentication/helpers/get-data-user';
import { routesEnum } from '@/shared/constants/routes';
import { IconArrowDownMenu, Logo } from '@/shared/icons';
// import api from '@/shared/api';
import type { ApiResponse } from '@/shared/types/api';

import { Avatar } from '../../shared/ui/avatar';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '../../shared/ui/menu';
import Navbar from '../Navbar';

const MenuItems = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const navigate = useNavigate();
  const { signout } = useAuth();

  const deleteAccount = async () => {
    if (!isAuthenticated) return;

    // const response = await services.delete<void, ApiResponse>('v1/user/delete');

    // if (response) {
    //   if (response.success) {
    //     window.location.reload();
    //   }
    // }
  };

  const logOut = () => {
    signout();

    navigate(routesEnum.DASHBOARD);
    window.location.reload();
  };

  return isAuthenticated ? (
    <>
      <MenuItem
        value="logout"
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
        value="delete-account"
        bgColor="#000"
        px={4}
        _hover={{
          bgColor: '#fefefe10',
        }}
        onClick={deleteAccount}
      >
        Excluir
      </MenuItem>
    </>
  ) : (
    <>
      <ModalRegister title="Criando sua conta">
        <MenuItem
          value="register-account"
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
          value="login-account"
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
  );
};

const Header = () => {
  const navigate = useNavigate();
  const user = getDataUser();

  const { isAuthenticated } = useAuth();

  return (
    <>
      <Box w="80%" marginInline="auto" zIndex={10}>
        <Center>
          <Link to="/">
            <Logo
              boxSize="120px"
              onClick={() => navigate(routesEnum.DASHBOARD)}
            />
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
          <MenuRoot>
            <MenuTrigger asChild>
              <HStack>
                {isAuthenticated && (
                  <Circle size="35px">
                    <Avatar />
                  </Circle>
                )}
                <Text color="#fefefe80">
                  {isAuthenticated ? user?.username : 'Sem usuário'}
                </Text>
                <IconArrowDownMenu boxSize="20px" color="#fefefe50" />
              </HStack>
            </MenuTrigger>
            <MenuContent
              bgColor="#000"
              borderColor="#fefefe15"
              minW="min-content"
            >
              <MenuItems isAuthenticated={isAuthenticated} />
            </MenuContent>
          </MenuRoot>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
