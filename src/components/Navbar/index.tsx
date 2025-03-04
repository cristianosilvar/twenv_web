import { Flex } from '@chakra-ui/react';

import { routesEnum } from '@/shared/config';

import {
  IconArrowDown,
  IconArrowUp,
  IconDashboard,
} from '../../shared/ui/icons';

import NavItem from './NavItem';

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
      <NavItem path={routesEnum.DASHBOARD} name="Inicío" icon={IconDashboard} />
      <NavItem
        path={routesEnum.SPENDINGS}
        name="Despesas"
        icon={IconArrowDown}
      />
      <NavItem path={routesEnum.EARNINGS} name="Ganhos" icon={IconArrowUp} />
    </Flex>
  );
};

export default Navbar;
