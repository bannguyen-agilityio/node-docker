import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import React from 'react';
import Link from 'next/link';

// Components
import { Status } from '@/components';

// Constants
import { ROUTES, StatusType } from '@/constants';

// Utils
import { delayResponse } from '@/utils';

// TODO: Will used when integrate API
const _status: Record<'failed' | 'banned', StatusType> = {
  banned: StatusType.BANNED,
  failed: StatusType.FAILED,
};

// TODO: This is the mock value, and it will be updated dynamically later
const LatestIssues = async () => {
  await delayResponse(123);

  return (
    <Box p='5' className='rounded-lg border border-[var(--gray-6)] shadow-sm'>
      <Flex align='center' gap='5'>
        <Heading as='h4' className='flex-1'>
          Recent Issues
        </Heading>
        <Link href={ROUTES.ISSUES} className='text-sm text-[var(--accent-11)]'>
          View more
        </Link>
      </Flex>
      <Text className='md:text-md text-sm text-[var(--gray-11)]'>
        Latest problems that need attention
      </Text>
      <ul className='mt-5 flex flex-col gap-5'>
        {Array.from({ length: 5 }).map((_, index) => {
          const isBanned: boolean = index % 2 === 0;

          return (
            <li key={index}>
              <Flex align='center' gap='5'>
                <Flex className='flex-1' align='center' gap='5'>
                  <Status
                    status={isBanned ? StatusType.BANNED : StatusType.FAILED}
                  />
                  <Text className='line-clamp-1 font-semibold'>{`@accountname ${isBanned ? 'has been banned' : 'has been failed to post content'}`}</Text>
                </Flex>
                <Text
                  as='span'
                  className='md:text-md text-sm text-[var(--gray-11)]'
                >
                  2h ago
                </Text>
              </Flex>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default LatestIssues;
