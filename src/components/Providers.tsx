'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

import theme from '@/theme';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider>{children}</SessionProvider>
    </ChakraProvider>
  );
};

export default Providers;
