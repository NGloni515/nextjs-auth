'use client';
import { Link } from '@chakra-ui/next-js';
import { SignInButton } from './SignInButton';

export const AppBar = () => {
  return (
    <header>
      <Link href={'/'} color='blue.400'>
        Home Page
      </Link>
      <Link href={'/dashboard'} color='blue.400' _hover={{ color: 'blue.600' }}>
        Dashboard
      </Link>
      <SignInButton />
    </header>
  );
};
