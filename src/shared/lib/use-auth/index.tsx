import { getDataUser } from '@/entities/user';

export const useAuth = () => {
  const token = localStorage.getItem('token');

  const isAuthenticated = !!token;
  const user = token ? getDataUser(token) : undefined;

  const signin = (token: string) => {
    localStorage.setItem('token', token);
  };

  const signout = () => {
    localStorage.removeItem('token');
  };

  return { isAuthenticated, user, signin, signout };
};
