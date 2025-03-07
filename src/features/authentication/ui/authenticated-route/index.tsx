import { Navigate, Outlet } from 'react-router-dom';

import { routesEnum } from '@/shared/config';
import { useAuth } from '@/shared/lib';

export const AuthenticatedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to={routesEnum.SIGN_IN} />;
};
