import type { FlexProps } from '@chakra-ui/react';
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';

import { formatMoney } from '@/shared/lib';
import { IconArrowDownRed, IconArrowUpGreen } from '@/shared/ui/icons';

interface ICardDashboard extends FlexProps {
  type?: 'spendings' | 'earnings';
  value: number;
}

const CardDashboard = ({
  type = 'spendings',
  value = 0,
  ...props
}: ICardDashboard) => {
  return (
    <Flex
      p={2}
      bgColor="#000000CC"
      w={{ base: 'full', md: '-webkit-fit-content' }}
      align="start"
      minW={{ base: '0', md: '300px' }}
      {...props}
    >
      <Box
        bgColor={type === 'spendings' ? '#C52121' : '#008325'}
        width="3px"
        height="100px"
        borderRadius="md"
      />
      <VStack align="start" px="30px">
        <HStack>
          {type === 'spendings' ? (
            <IconArrowDownRed boxSize="20px" />
          ) : (
            <IconArrowUpGreen boxSize="20px" />
          )}
          <Text fontSize="lg" color="#fefefe50">
            {type === 'spendings' ? 'despesas' : 'ganhos'}
          </Text>
        </HStack>
        <Flex gap={2} fontSize="3xl" fontWeight="extrabold">
          <Text opacity={0.5}>R$</Text>{' '}
          {formatMoney({ value }).replace('R$', '').trim()}
        </Flex>
      </VStack>
    </Flex>
  );
};

export default CardDashboard;
