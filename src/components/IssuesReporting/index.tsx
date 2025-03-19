import { Flex } from '@radix-ui/themes';
import React from 'react';

// Components
import { IssueReporting } from '@/components';

// Constants
import { IssueStatus } from '@/constants';

interface IssueReportingProps {
  issues: unknown[]; // TODO: Will update when API ready
}

const IssuesReporting = ({ issues }: IssueReportingProps) => (
  <Flex direction='column' gap='4' align='start'>
    {issues.map((_, index) => (
      <IssueReporting
        key={index}
        account='@travel_photos'
        device='Iphone 14'
        status={index % 2 === 0 ? IssueStatus.BANNED : IssueStatus.FAILED} // TODO: Will replace to status response from BE
      />
    ))}
  </Flex>
);

export default IssuesReporting;
