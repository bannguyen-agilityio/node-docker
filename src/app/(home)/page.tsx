import { ExclamationTriangleIcon, MobileIcon } from '@radix-ui/react-icons';
import { Box, Grid, Heading, Text } from '@radix-ui/themes';

// Constants
import { HighlightColor } from '@/constants';

// Components
import { InfoCard, LatestIssues } from '@/components';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Heading className='text-3xl'>Dashboard</Heading>
      <Text className='text-[var(--gray-11)]'>
        Overview of your phone automation system
      </Text>
      <Grid className='mt-5 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
        <InfoCard
          title='Total Devices'
          value={12}
          icon={<MobileIcon width='20' height='20' />}
        />
        <InfoCard
          title='Issues'
          highlightColor={HighlightColor.PRIMARY}
          highlightText='per day'
          value={12}
          icon={<ExclamationTriangleIcon width='20' height='20' />}
          description='2 banned accounts, 1 failed post'
        />
      </Grid>
      <Box mt='5'>
        <LatestIssues />
      </Box>
    </>
  );
}
