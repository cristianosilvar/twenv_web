import type { IconProps } from '@chakra-ui/react';
import { Box, HStack, Icon, Show, Text, useMediaQuery } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

interface INavItem {
  path: string;
  name: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const NavItem = ({ path, name, icon: CustomIcon }: INavItem) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLargerThan600] = useMediaQuery(['(min-width: 600px )'], {
    fallback: [true],
  });

  const isActive = location.pathname === path;

  return (
    <Box
      opacity={isActive ? 1 : 0.5}
      fontWeight="600"
      onClick={() => navigate(path)}
    >
      <Box h="6px" w="full" bgColor="#513BD9" opacity={isActive ? 1 : 0} />
      <HStack px="6" py="3" gap="10px">
        <Icon boxSize="20px">
          <CustomIcon />
        </Icon>
        <Show when={isLargerThan600}>
          <Text>{name}</Text>
        </Show>
      </HStack>
    </Box>
  );
};
