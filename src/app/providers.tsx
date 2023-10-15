'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { DevCycleProvider } from '@devcycle/devcycle-react-sdk';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <DevCycleProvider
        config={{
          sdkKey: process.env.NEXT_PUBLIC_DVC_SDK_KEY || ''
        }}
      >
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
      </DevCycleProvider>
    </UserProvider>
  );
}
