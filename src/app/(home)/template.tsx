import { Container, Flex } from '@radix-ui/themes';
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
      <Container
        className='min-h-full flex-1 lg:overflow-y-auto lg:bg-gray-50 lg:p-5 lg:pr-5 [&>.rt-ContainerInner]:h-fit [&>.rt-ContainerInner]:bg-white [&>.rt-ContainerInner]:p-5 md:[&>.rt-ContainerInner]:rounded-xl lg:[&>.rt-ContainerInner]:border lg:[&>.rt-ContainerInner]:border-[var(--gray-6)]'
        size='4'
      >
        {children}
      </Container>
    </Flex>
  );
};

export default HomeLayout;
