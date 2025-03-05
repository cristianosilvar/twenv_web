import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Header from '@/components/Header';
import { DashboardPage } from '@/features/dashboard';
import { EarningListPage } from '@/features/earning-list';
import { SpendingListPage } from '@/features/spending-list';
import { routesEnum } from '@/shared/config';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routesEnum.DASHBOARD} element={<DashboardPage />} />
        <Route path={routesEnum.EARNINGS} element={<EarningListPage />} />
        <Route path={routesEnum.SPENDINGS} element={<SpendingListPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};
