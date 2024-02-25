import Link from 'next/link';
import { SignInButton } from './SignInButton';

export const AppBar = () => {
  return (
    <header>
      <Link href={'/'} color='blue.400'>
        Home Page
      </Link>
      <Link href={'/dashboard'} color='blue.400'>
        Dashboard
      </Link>
      <SignInButton />
    </header>
  );
};
