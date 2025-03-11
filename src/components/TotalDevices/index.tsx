import { Box, Flex, Text } from '@radix-ui/themes';
import { MobileIcon } from '@radix-ui/react-icons';

const TotalDevices = () => {
  return (
    <>
      <Flex width='400px'>
        <div className='flex w-full justify-between rounded-lg border bg-white px-5 py-10 shadow-sm'>
          <Box>
            <Text className='font-medium' size='4'>
              Total Devices
            </Text>
            <p className='text-3xl font-bold'>12</p>
          </Box>
          <MobileIcon width={25} height={25} />
        </div>
      </Flex>
    </>
  );
};

export default TotalDevices;
