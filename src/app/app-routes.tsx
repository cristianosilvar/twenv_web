import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Header from '@/components/Header';
import DashboardPage from '@/features/dashboard/page';
import EarningsPage from '@/features/earning-list/ui';
import SpendingsPage from '@/features/spending-list/page';
import { routesEnum } from '@/shared/constants/routes';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routesEnum.DASHBOARD} element={<DashboardPage />} />
        <Route path={routesEnum.EARNINGS} element={<EarningsPage />} />
        <Route path={routesEnum.SPENDINGS} element={<SpendingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
