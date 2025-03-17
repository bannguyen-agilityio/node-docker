import React from 'react';
import { Box } from '@radix-ui/themes';

// Components
import { DevicesTable, PageHeading, Pagination } from '@/components';

// Utils
import { getPageSize } from '@/utils';

const DevicesPage = () => {
  const totalItems: number = 100;
  const devices = Array.from({ length: 20 });
  const totalPages: number = getPageSize({
    totalItems,
  });
  return (
    <PageHeading title='Devices' subTitle='Manage and control your devices'>
      <Box>
        <DevicesTable devices={devices} />
        <Box mt='6'>
          <Pagination totalPage={totalPages} currentPage={1} />
        </Box>
      </Box>
    </PageHeading>
  );
};

export default DevicesPage;
