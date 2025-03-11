import { Flex, Text } from '@radix-ui/themes';

import { HighlightColor } from '@/constants';

interface InfoCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  highlightText?: string;
  highlightColor?: HighlightColor;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  description,
  icon,
  highlightText,
  highlightColor = HighlightColor.PRIMARY,
}) => {
  return (
    <Flex
      className='w-full rounded-lg border border-[var(--gray-6)] bg-white px-5 py-10 shadow-sm'
      align='start'
    >
      <Flex direction='column' className='flex-1'>
        <Text
          as='span'
          className='flex items-center gap-2 font-medium'
          size='4'
        >
          {title}
          {highlightText && (
            <Text as='span' color={highlightColor} size='2'>
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
    </Flex>
  );
};

export default InfoCard;
