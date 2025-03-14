import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import React from 'react';

const Skeleton = ({ width, height }: { width: string; height: string }) => (
  <Box
    className={`animate-pulse rounded bg-gray-300`}
    style={{ width, height }}
  />
);

const IssueReportingSkeleton = () => {
  return (
    <Flex
      className='w-full flex-1 rounded-lg border border-[var(--gray-6)] p-4 lg:p-5'
      align='start'
      gap='4'
    >
      {/* Icon Skeleton */}
      <Skeleton width='22px' height='22px' />

      {/* Content Skeleton */}
      <Box>
        <Heading as='h2' size='3'>
          <Skeleton width='150px' height='16px' />
        </Heading>
        <Text size='2' className='mt-2 text-[var(--gray-11)]'>
          <Skeleton width='250px' height='14px' />
        </Text>
        <Flex wrap='wrap' gap='3' mt='3'>
          <Skeleton width='80px' height='20px' />
          <Skeleton width='80px' height='20px' />
          <Skeleton width='80px' height='20px' />
        </Flex>
      </Box>
    </Flex>
  );
};

export default IssueReportingSkeleton;
