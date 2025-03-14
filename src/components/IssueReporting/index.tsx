import {
  CrossCircledIcon,
  ExclamationTriangleIcon,
} from '@radix-ui/react-icons';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import React, { ReactNode } from 'react';

// Constants
import { ISSUE_STATUS, MediaPlatform } from '@/constants';

// Components
import { Status } from '@/components';

// Utils
import { getIssueDetails } from '@/utils';

interface IssueReportingProps {
  status: keyof typeof ISSUE_STATUS;
  device: string;
  account: string;
  time?: Date | string; // TODO: Will update when API ready
  mediaPlatform?: MediaPlatform.INSTAGRAM;
}

const icons: Record<keyof typeof ISSUE_STATUS, ReactNode> = {
  banned: (
    <ExclamationTriangleIcon className='text-red-500' width={22} height={22} />
  ),
  failed: (
    <CrossCircledIcon className='text-yellow-500' width={22} height={22} />
  ),
};

const IssueReporting = ({
  account,
  device,
  status,
  mediaPlatform,
}: IssueReportingProps) => {
  const { message, time, title } = getIssueDetails({
    account,
    status: status,
    mediaPlatform,
  });
  return (
    <Flex
      className='w-full flex-1 rounded-lg border border-[var(--gray-6)] p-4 lg:p-5'
      align='start'
      gap='4'
    >
      <Box>{icons[status]}</Box>
      <Box>
        <Heading as='h2' size='3'>
          {title}
        </Heading>
        <Text size='2' className='text-[var(--gray-11)]'>
          {message}
        </Text>
        <Flex wrap='wrap' gap='3' mt='3'>
          <Status status={device} />
          <Status status={account} />
          <Status status={time} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default IssueReporting;
