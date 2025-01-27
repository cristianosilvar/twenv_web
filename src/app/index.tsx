import { AppRoutes } from '@/routes';

import { AppProviders } from './app-providers';

export const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};
