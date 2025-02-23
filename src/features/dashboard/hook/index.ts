import { useCallback, useEffect, useState } from 'react';

import services from '@/services';
import { ApiResponse } from '@/shared/types/api';

export const useDashboard = () => {
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
    const response = await services.get<void, ApiResponse<number>>(
      'v1/spendings',
      { transformResponse: calculateTotalFromData },
    );

    if (response) {
      if (response.success && response.data) {
        setTotalSpendings(response.data);
      }
    }
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

  return { totalSpendings, totalEarnings, currentDate };
};
