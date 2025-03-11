import { Flex, Text } from '@radix-ui/themes';

interface InfoCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  highlightText?: string;
  highlightColor?: 'blue' | 'red' | 'green' | 'gray';
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  description,
  icon,
  highlightText,
  highlightColor = 'gray',
}) => {
  return (
    <Flex width='400px'>
      <div className='flex w-full justify-between rounded-lg border bg-white px-5 py-10 shadow-sm'>
        <Flex direction='column'>
          <Text className='font-medium' size='4'>
            {title}
            {highlightText && (
              <Text className='ml-2' color={highlightColor} size='2'>
                {highlightText}
              </Text>
            )}
          </Text>
          <Text className='text-3xl font-bold'>{value}</Text>
          {description && (
            <Text color='gray' size='2'>
              {description}
            </Text>
          )}
        </Flex>
        {icon}
      </div>
    </Flex>
  );
};

export default InfoCard;
