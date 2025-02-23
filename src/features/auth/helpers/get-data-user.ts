import { jwtDecode } from 'jwt-decode';

import type { UserInterface } from '@/shared/types/user';

export const getDataUser = () => {
  const token = localStorage.getItem('token') || '';

  try {
    const user: UserInterface = jwtDecode(token);
    return user;
  } catch (err: any) {
    console.error('Erro ao decodificar o token:', err.message);
  }
};
