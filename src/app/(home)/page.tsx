import { ExclamationTriangleIcon, MobileIcon } from '@radix-ui/react-icons';
import { Box, Grid } from '@radix-ui/themes';

// Components
import { InfoCard, LatestIssues, PageHeading } from '@/components';

export default function Home() {
  return (
    <PageHeading
      title='Dashboard'
      subTitle='Overview of your phone automation system'
    >
      <Grid className='grid-cols-1 gap-5 md:grid-cols-2'>
        <InfoCard
          title='Total Devices'
          value={12}
          icon={<MobileIcon width='20' height='20' />}
        />
        <InfoCard
          title='Issues'
          highlightText='per day'
          value={12}
          icon={<ExclamationTriangleIcon width='20' height='20' />}
          description='2 banned accounts, 1 failed post'
        />
      </Grid>
      <Box mt='5'>
        <LatestIssues />
      </Box>
    </PageHeading>
  );
}
