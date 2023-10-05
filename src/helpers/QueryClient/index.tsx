import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export type TProps = {
  children: ReactNode;
};

export const ReactQueryProvider = ({ children }: TProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
