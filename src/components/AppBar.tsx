'use client';
import { Link } from '@chakra-ui/next-js';
import { IconButton } from '@chakra-ui/react';
import { BiChalkboard, BiMap } from 'react-icons/bi';
import { BsBarChart } from 'react-icons/bs';
import { FiMenu, FiSettings } from 'react-icons/fi';
import Sidenav from './layout/sidenav/sidenav';
import SidenavContainer from './layout/sidenav/sidenav-container';
import { useSidenav } from './layout/sidenav/sidenav-context/sidenav-context';
import { SidenavItem } from './layout/sidenav/sidenav-items/sidenav-items';
import { SignInButton } from './SignInButton';

export function AppBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): any {
  const navItems: SidenavItem[] = [
    { icon: BsBarChart, label: 'Dashboard', to: '/dashboard' },
    { icon: BiChalkboard, label: 'Home', to: '/' },
  ];
  const { onOpen } = useSidenav();
  return (
    <SidenavContainer sidenav={<Sidenav navItems={navItems} />}>
      <IconButton
        aria-label='menu'
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        icon={<FiMenu />}
      />
      {children}
    </SidenavContainer>
  );
}
