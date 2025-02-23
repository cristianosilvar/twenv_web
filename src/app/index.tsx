import { AppProviders } from './app-providers';
import { AppRoutes } from './app-routes';

export const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};
