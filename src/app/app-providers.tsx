import { PropsWithChildren } from 'react';

import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/features/auth/context';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <Toaster />
      {children}
    </AuthProvider>
  );
};
