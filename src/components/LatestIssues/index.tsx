import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import React from 'react';
import Link from 'next/link';

// Components
import { Status } from '@/components';

// Constants
import { ISSUE_STATUS, ROUTES } from '@/constants';

// Types
import { DashBoardOverview } from '@/interfaces';

// Utils
import { getIssueDetails } from '@/utils';

interface LatestIssuesProps {
  issues: DashBoardOverview['recentIssues'];
}

const LatestIssues = ({ issues }: LatestIssuesProps) => {
  const isNoIssues: boolean = !issues.length;

  return (
    <Box p='5' className='rounded-lg border border-[var(--gray-6)] shadow-sm'>
      <Flex align='center' gap='5'>
        <Heading as='h4' className='flex-1'>
          Recent Issues
        </Heading>
        <Link
          href={ROUTES.ISSUES}
          className='text-sm text-[var(--accent-11)] capitalize'
        >
          View more
        </Link>
      </Flex>
      <Text className='md:text-md text-sm text-[var(--gray-11)]'>
        Latest issues that need attention
      </Text>

      {!isNoIssues ? (
        <ul className='mt-5 flex flex-col gap-5'>
          {issues.map(({ type, instagramAccount, createdAt }, index) => {
            const { message, time } = getIssueDetails({
              account: instagramAccount,
              status: type,
              time: new Date(createdAt),
            });

            return (
              <li key={index}>
                <Flex align='center' gap='5'>
                  <Flex className='flex-1' align='center' gap='3'>
                    <Box className='w-24'>
                      <Status
                        className='md:text-md inline-block w-full text-center text-sm'
                        status={ISSUE_STATUS[type]}
                      />
                    </Box>
                    <Text className='line-clamp-1 flex-1 font-semibold'>
                      {message}
                    </Text>
                  </Flex>
                  <Text
                    as='span'
                    className='md:text-md text-sm text-[var(--gray-11)]'
                  >
                    {time}
                  </Text>
                </Flex>
              </li>
            );
          })}
        </ul>
      ) : (
        <Flex className='h-60' justify='center' align='center'>
          <Text>No issues yet.</Text>
        </Flex>
      )}
    </Box>
  );
};

export default LatestIssues;
