import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Header from '@/components/Header';
import { routesEnum } from '@/constants/routes';
import DashboardPage from '@/features/dashboard/page';
import EarningsPage from '@/features/earning/page';
import SpendingsPage from '@/features/spending/page';

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
