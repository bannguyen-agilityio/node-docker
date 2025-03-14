import { Flex, Skeleton } from '@radix-ui/themes';
import React from 'react';

const IssueReportingSkeleton = () => (
  <Flex
    className='w-full flex-1 rounded-lg border border-[var(--gray-6)] p-4 lg:p-5'
    align='start'
    gap='4'
  >
    <Skeleton width='25px' height='25px' className='rounded-full' />
    <Flex direction='column' gap='3' className='flex-1'>
      <Skeleton height='15px' className='w-[60%] rounded-full md:w-[30%]' />
      <Skeleton height='15px' className='rounded-full md:w-[50%]' />
      <Skeleton height='15px' className='w-[80%] rounded-full md:hidden' />
      <Flex gap='3' wrap='wrap'>
        <Skeleton width='100px' height='25px' className='rounded-full' />
        <Skeleton width='130px' height='25px' className='rounded-full' />
        <Skeleton width='90px' height='25px' className='rounded-full' />
      </Flex>
    </Flex>
  </Flex>
);

export default IssueReportingSkeleton;
