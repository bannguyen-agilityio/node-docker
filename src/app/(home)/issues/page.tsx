import React from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';

// Components
import { IssueReporting, PageHeading, Pagination } from '@/components';

// Constants
import { GENERAL_MESSAGES, StatusType } from '@/constants';

// Utils
import { getPageSize } from '@/utils';

// TODO: Will update when API ready
const IssuesPage = () => {
  const totalItems: number = 100;
  const issues = Array.from({ length: 20 });
  const hasNoIssue: boolean = !issues.length;
  const totalPages: number = getPageSize({
    totalItems,
  });

  return (
    <PageHeading title='Issues' subTitle='Issues that require attention'>
      {hasNoIssue ? (
        <Flex height='150px' align='center' justify='center'>
          <Text align='center'>{GENERAL_MESSAGES.NO_ISSUES}</Text>
        </Flex>
      ) : (
        <Box>
          {/* IssuesReporting component*/}
          <Flex direction='column' gap='4' align='start'>
            {issues.map((_, index) => (
              <IssueReporting
                key={index}
                account='@travel_photos'
                device='Iphone 14'
                status={index % 2 === 0 ? StatusType.BANNED : StatusType.FAILED} // TODO: Will replace to status response from BE
              />
            ))}
          </Flex>
          {/* Pagination component */}
          <Box mt='5'>
            <Pagination totalPage={totalPages} currentPage={1} />
          </Box>
        </Box>
      )}
    </PageHeading>
  );
};

export default IssuesPage;
