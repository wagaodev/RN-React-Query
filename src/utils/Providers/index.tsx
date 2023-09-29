import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

type TProps = {
  children: ReactNode;
};

export const Providers = ({ children }: TProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
