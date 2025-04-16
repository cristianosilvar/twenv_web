import type { PropsWithChildren } from 'react';

import { Toaster } from '@/shared/ui/toaster';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};
