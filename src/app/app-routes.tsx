import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Header from '@/components/Header';
import DashboardPage from '@/features/dashboard/page';
import { EarningListPage } from '@/features/earning-list';
import SpendingsPage from '@/features/spending-list/page';
import { routesEnum } from '@/shared/config';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routesEnum.DASHBOARD} element={<DashboardPage />} />
        <Route path={routesEnum.EARNINGS} element={<EarningListPage />} />
        <Route path={routesEnum.SPENDINGS} element={<SpendingsPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};
