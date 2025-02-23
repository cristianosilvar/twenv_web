import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

import CardDashboard from '@/components/Card/CardDashboard';
// import services from '@/services';
import type { ApiResponse } from '@/shared/types/api';
import formatDate from '@/shared/utils/format-date';

export default function DashboardPage() {
  const currentDate = new Date();

  const [totalSpendings, setTotalSpendings] = useState<number>(0);
  const [totalEarnings, setTotalEarnings] = useState<number>(0);

  const calculateTotalFromData = (data: string) => {
    const dataJson = JSON.parse(data) as ApiResponse<{ value: number }[]>;

    let totalInfo = 0;

    dataJson.data.forEach((info) => {
      totalInfo += info.value;
    });

    return { ...dataJson, data: totalInfo };
  };

  const getTotalSpendings = useCallback(async () => {
    // const response = await services.get<void, ApiResponse<number>>(
    //   'v1/spendings',
    //   { transformResponse: calculateTotalFromData },
    // );
    // if (response) {
    //   if (response.success && response.data) {
    //     setTotalSpendings(response.data);
    //   }
    // }
  }, []);

  const getTotalEarnings = useCallback(async () => {
    const response = await services.get<void, ApiResponse<number>>(
      'v1/earnings',
      { transformResponse: calculateTotalFromData },
    );

    if (response) {
      if (response.success && response.data) {
        setTotalEarnings(response.data);
      }
    }
  }, []);

  useEffect(() => {
    getTotalEarnings();
  }, [getTotalEarnings]);

  useEffect(() => {
    getTotalSpendings();
  }, [getTotalSpendings]);

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
}
