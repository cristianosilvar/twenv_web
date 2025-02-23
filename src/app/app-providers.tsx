import { PropsWithChildren } from 'react';

import { Toaster } from '@/shared/ui/toaster';
import { AuthProvider } from '@/features/auth/context';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <Toaster />
      {children}
    </AuthProvider>
  );
};
