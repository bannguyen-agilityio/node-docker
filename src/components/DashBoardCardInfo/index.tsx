import { Grid } from '@radix-ui/themes';
import React from 'react';
import { ExclamationTriangleIcon, MobileIcon } from '@radix-ui/react-icons';

// Components
import { InfoCard } from '@/components';

// Services
import { getDashboardOverview } from '@/services/dashboard';
import { pluralize } from '@/utils';

const DashBoardCardInfo = async () => {
  const {
    totalDevices,
    issuesPerDay: { bannedAccounts, failedPosts },
  } = await getDashboardOverview();

  return (
    <Grid className='grid-cols-1 gap-5 md:grid-cols-2'>
      <InfoCard
        title='Total Devices'
        value={totalDevices}
        icon={<MobileIcon width='20' height='20' />}
      />
      <InfoCard
        title='Issues'
        highlightText='per day'
        value={bannedAccounts + failedPosts}
        icon={<ExclamationTriangleIcon width='20' height='20' />}
        description={`${bannedAccounts} ${pluralize(bannedAccounts, 'banned account', 'banned accounts')}, ${failedPosts} ${pluralize(bannedAccounts, 'failed post', 'failed posts')}`}
      />
    </Grid>
  );
};

export default DashBoardCardInfo;
