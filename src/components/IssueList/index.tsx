import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import React from 'react';
import Link from 'next/link';

// Components
import { Status } from '@/components';

// Constants
import { ROUTES, StatusType } from '@/constants';

// TODO: This is the mock value, and it will be updated dynamically later
const IssueList = () => {
  return (
    <Box p='5' className='rounded-lg border border-[var(--gray-6)]'>
      <Flex align='center' gap='5'>
        <Heading as='h4' className='flex-1'>
          Recent Issues
        </Heading>
        <Link href={ROUTES.ISSUES} className='text-sm text-[var(--accent-11)]'>
          View more
        </Link>
      </Flex>
      <Text className='text-[var(--gray-11)]'>
        Latest problems that need attention
      </Text>
      <ul className='mt-5 flex flex-col gap-5'>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            <Flex align='center' gap='5'>
              <Flex className='flex-1' align='center' gap='5'>
                <Status
                  status={
                    index % 2 === 0 ? StatusType.BANNED : StatusType.FAILED
                  }
                />
                <Text className='line-clamp-1'>@accountname</Text>
              </Flex>
              <Text
                as='span'
                className='md:text-md text-sm text-[var(--gray-11)]'
              >
                2h ago
              </Text>
            </Flex>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default IssueList;
