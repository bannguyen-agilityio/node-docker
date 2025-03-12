import { Flex } from '@radix-ui/themes';

const InfoCardSkeleton: React.FC = () => {
  return (
    <Flex
      className='w-full rounded-lg border border-[var(--gray-6)] bg-white px-5 py-10 shadow-sm'
      align='start'
    >
      <Flex direction='column' className='flex-1 space-y-3'>
        <div className='h-5 w-80 animate-pulse rounded bg-gray-200' />
        <div className='h-8 w-60 animate-pulse rounded bg-gray-200' />
        <div className='h-4 w-100 animate-pulse rounded bg-gray-200' />
      </Flex>
      <div className='h-10 w-10 animate-pulse rounded-full bg-gray-200' />
    </Flex>
  );
};

export default InfoCardSkeleton;
