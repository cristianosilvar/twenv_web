import { useCallback, useEffect, useState } from 'react';

import type {
  IGetListEarningService,
  IGetListSpendingService,
} from '@/shared/api';

type UseDashboardModelParams = {
  getListEarningService: IGetListEarningService;
  getListSpendingService: IGetListSpendingService;
};

const DEFAULT_VALUE = 0;

export const useDashboardModel = (params: UseDashboardModelParams) => {
  const { getListEarningService, getListSpendingService } = params;

  const currentDate = new Date();

  const [totalSpendings, setTotalSpendings] = useState<number>(DEFAULT_VALUE);
  const [totalEarnings, setTotalEarnings] = useState<number>(DEFAULT_VALUE);

  const getTotalSpendings = useCallback(async () => {
    const response = await getListSpendingService.exec();

    if (response) {
      if (response.success && response.data) {
        const total = response.data.reduce(
          (val, spending) => val + spending.value,
          DEFAULT_VALUE,
        );

        setTotalSpendings(total);
      }
    }
    return response;
  }, [getListSpendingService]);

  const getTotalEarnings = useCallback(async () => {
    const response = await getListEarningService.exec();

    if (response) {
      if (response.success && response.data) {
        const total = response.data.reduce(
          (val, earning) => val + earning.value,
          DEFAULT_VALUE,
        );

        setTotalEarnings(total);
      }
    }

    return response;
  }, [getListEarningService]);

  useEffect(() => {
    getTotalEarnings();
  }, [getTotalEarnings]);

  useEffect(() => {
    getTotalSpendings();
  }, [getTotalSpendings]);

  return { totalSpendings, totalEarnings, currentDate };
};
