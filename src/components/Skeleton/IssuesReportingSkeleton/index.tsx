import { Flex } from '@radix-ui/themes';
import React from 'react';
import IssueReportingSkeleton from '../IssueReportingSkeleton';

const IssuesReportingSkeleton = () => (
  <Flex direction='column' gap='4' align='start'>
    {Array.from({ length: 20 }).map((_, index) => (
      <IssueReportingSkeleton key={index} />
    ))}
  </Flex>
);

export default IssuesReportingSkeleton;
