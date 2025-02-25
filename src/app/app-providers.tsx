import type { PropsWithChildren } from 'react';

import { AuthProvider } from '@/features/authentication/context';
import { Toaster } from '@/shared/ui/toaster';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <Toaster />
      {children}
    </AuthProvider>
  );
};
