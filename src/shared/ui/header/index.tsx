import { Box, Center, Circle, Flex, HStack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

import { routesEnum } from '@/shared/config';
import { useAuth } from '@/shared/lib/use-auth';
import { IconArrowDownMenu, Logo } from '@/shared/ui/icons';

import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '../menu';
import Navbar from '../nav-bar';

const MenuItems = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const navigate = useNavigate();
  const { signout } = useAuth();

  const logOut = () => {
    signout();

    navigate(routesEnum.DASHBOARD);
    window.location.reload();
  };

  return (
    isAuthenticated && (
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
      </>
    )
  );
};

export const Header = () => {
  const navigate = useNavigate();

  const { isAuthenticated, user } = useAuth();

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
              <HStack cursor="pointer">
                <Box borderRadius="full" bg="gray.900">
                  {isAuthenticated && (
                    <Circle size="35px">
                      {user?.username?.substring(0, 1)}
                    </Circle>
                  )}
                </Box>
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
