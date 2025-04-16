import { jwtDecode } from 'jwt-decode';

import type { UserModel } from '@/entities/user';
import { logger } from '@/shared/lib';

export const getDataUser = (token: string) => {
  try {
    const user: UserModel = jwtDecode(token);
    return user;
  } catch (err: any) {
    logger.error('Erro ao decodificar o token:', err.message);
  }
};
