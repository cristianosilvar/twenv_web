import { useMemo } from 'react';

import {
  GetListEarningService,
  GetListSpendingService,
  HttpClient,
} from '@/shared/api';

import { useDashboardModel } from '../model';

import { Dashboard } from './dashboard';

export const DashboardPage = () => {
  const http = useMemo(() => new HttpClient(), []);

  const getListEarningService = useMemo(
    () => new GetListEarningService(http),
    [http],
  );

  const getListSpendingService = useMemo(
    () => new GetListSpendingService(http),
    [http],
  );

  const methods = useDashboardModel({
    getListEarningService,
    getListSpendingService,
  });

  return <Dashboard {...methods} />;
};
