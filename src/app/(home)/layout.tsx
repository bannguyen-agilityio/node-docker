import { Flex } from '@radix-ui/themes';
import React, { ReactNode } from 'react';

// Components
import { Sidebar } from '@/components';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Flex
      className='block h-full p-5 lg:flex lg:overflow-visible lg:p-[unset]'
      gap='5'
    >
      <Sidebar />
      <div className='mt-5 flex-1 lg:overflow-y-auto lg:pr-5'>{children}</div>
    </Flex>
  );
};

export default HomeLayout;
