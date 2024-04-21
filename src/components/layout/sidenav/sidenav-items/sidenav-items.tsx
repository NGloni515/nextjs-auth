import { Link as NavLink } from '@chakra-ui/next-js';
import {
  List,
  ListItem,
  Icon,
  Flex,
  Text,
  Link,
  Tooltip,
  IconButton,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface SidenavItem {
  icon: IconType;
  label: string;
  to: string;
}

export interface SidenavItemsProps {
  navItems: SidenavItem[];
  mode?: 'semi' | 'over';
}

export function SidenavItems({ navItems, mode = 'semi' }: SidenavItemsProps) {
  const sidebarItemInOverMode = (item: SidenavItem, index: number) => (
    <ListItem key={index}>
      <Link
        display='block'
        as={NavLink}
        href={item.to}
        _focus={{ bg: 'gray.100' }}
        _hover={{
          bg: 'gray.200',
        }}
        _activeLink={{ bg: 'orange.500', color: 'white' }}
        w='full'
        borderRadius='md'
      >
        <Flex alignItems='center' p={2}>
          <Icon boxSize='5' as={item.icon} />
          <Text ml={2}>{item.label}</Text>
        </Flex>
      </Link>
    </ListItem>
  );
  const sidebarItemInSemiMode = (
    { icon: Icon, ...item }: SidenavItem,
    index: number
  ) => (
    <ListItem key={index}>
      <Link
        display='block'
        as={NavLink}
        href={item.to}
        _focus={{ bg: 'gray.100' }}
        _hover={{
          bg: 'gray.200',
        }}
        _activeLink={{ bg: 'orange.500', color: 'white' }}
        w='full'
        borderRadius='md'
      >
        <Flex alignItems='center' p={2}>
          <Icon size={'20'} />
          <Text ml={2}>{item.label}</Text>
        </Flex>
      </Link>
    </ListItem>
  );
  return (
    <List spacing={3}>
      {mode === 'semi'
        ? navItems.map((item, index) => sidebarItemInSemiMode(item, index))
        : navItems.map((item, index) => sidebarItemInOverMode(item, index))}
    </List>
  );
}

export default SidenavItems;
