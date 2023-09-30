import React from 'react';
import { ReactQueryProvider, TProps } from '..';

export const Providers = ({ children }: TProps) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
