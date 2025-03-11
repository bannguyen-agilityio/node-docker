import { Flex } from '@radix-ui/themes';
import React, { ReactNode } from 'react';

// Components
import { Sidebar } from '@/components';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Flex className='block h-full lg:flex lg:overflow-visible'>
      <Sidebar />
      <div className='flex-1 p-5 lg:overflow-y-auto lg:pr-5'>{children}</div>
    </Flex>
  );
};

export default HomeLayout;
