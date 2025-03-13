import { Box, Heading, Text } from '@radix-ui/themes';
import React, { ReactNode } from 'react';

interface PageHeadingProps {
  title: string;
  subTitle: string;
  children: ReactNode;
}

const PageHeading = ({ children, subTitle, title }: PageHeadingProps) => (
  <>
    <Box className='mb-5'>
      <Heading className='text-3xl'>{title}</Heading>
      <Text className='text-[var(--gray-11)]'>{subTitle}</Text>
    </Box>
    {children}
  </>
);
export default PageHeading;
