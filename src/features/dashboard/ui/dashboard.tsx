import { Box, Heading, Stack, Text } from '@chakra-ui/react';

import CardDashboard from '@/components/Card/CardDashboard';
import { formatDate } from '@/shared/lib';

import type { useDashboardModel } from '../model';

type DashboardProps = ReturnType<typeof useDashboardModel>;

export const Dashboard = (props: DashboardProps) => {
  const { currentDate, totalEarnings, totalSpendings } = props;

  return (
    <Box w="80%" marginInline="auto" mt="30px">
      <Heading as="h2">Dashboard</Heading>
      <Text fontWeight="600" color="#fefefe50">
        {formatDate(currentDate, 'monthName')}
      </Text>
      <Stack
        gap={{ base: '0', md: '15px' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <CardDashboard mt="30px" type="spendings" value={totalSpendings} />
        <CardDashboard mt="30px" type="earnings" value={totalEarnings} />
      </Stack>
    </Box>
  );
};
