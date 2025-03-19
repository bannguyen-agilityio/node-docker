import { Box, Grid } from '@radix-ui/themes';
import { Suspense } from 'react';

// Components
import {
  DashBoardCardInfo,
  DashboardRecentIssues,
  InfoCardSkeleton,
  LatestIssuesSkeleton,
  PageHeading,
} from '@/components';

export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <PageHeading
      title='Dashboard'
      subTitle='Overview of your phone automation system'
    >
      <Suspense
        fallback={
          <Grid className='grid-cols-1 gap-5 md:grid-cols-2'>
            <InfoCardSkeleton />
            <InfoCardSkeleton />
          </Grid>
        }
      >
        <DashBoardCardInfo />
      </Suspense>
      <Box mt='5'>
        <Suspense fallback={<LatestIssuesSkeleton />}>
          <DashboardRecentIssues />
        </Suspense>
      </Box>
    </PageHeading>
  );
}
