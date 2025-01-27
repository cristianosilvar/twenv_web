import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

import { UserInterface } from '@/types/user';

import { getDataUser } from '../helpers/get-data-user';

interface AuthContextProps {
  isAuthenticated: boolean;
  user: UserInterface | undefined;
  signin: (token: string) => void;
  signout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const token = localStorage.getItem('token');

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserInterface | undefined>(undefined);

  const signin = (token: string) => {
    localStorage.setItem('token', token);

    const user: UserInterface | undefined = getDataUser();

    setIsAuthenticated(true);
    setUser(user);
  };

  const signout = () => {
    localStorage.removeItem('token');

    setIsAuthenticated(false);
    setUser(undefined);
  };

  useEffect(() => {
    if (!token) return;
    signin(token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
