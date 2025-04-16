import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { AuthenticatedRoute } from '@/features/authentication';
import { DashboardPage } from '@/features/dashboard';
import { EarningListPage } from '@/features/earning-list';
import { SignInPage } from '@/features/sign-in';
import { SignUpPage } from '@/features/sign-up';
import { SpendingListPage } from '@/features/spending-list';
import { routesEnum } from '@/shared/config';
import { Layout } from '@/shared/ui';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authenticated routes */}
        <Route element={<AuthenticatedRoute />}>
          {/* Pages with layout */}
          <Route element={<Layout />}>
            <Route path={routesEnum.DASHBOARD} element={<DashboardPage />} />
            <Route path={routesEnum.EARNINGS} element={<EarningListPage />} />
            <Route path={routesEnum.SPENDINGS} element={<SpendingListPage />} />
          </Route>
        </Route>
        <Route path={routesEnum.SIGN_IN} element={<SignInPage />} />
        <Route path={routesEnum.SIGN_UP} element={<SignUpPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};
