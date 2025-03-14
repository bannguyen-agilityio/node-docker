import React from 'react';
import { Flex, Select, Text } from '@radix-ui/themes';

// Constants
import { PAGE_SIZE_OPTIONS } from '@/constants';

interface PageSizeSelectorProps {
  pageSize?: number;
  onPageSizeChange?: (newSize: number) => void;
}

const PageSizeSelector: React.FC<PageSizeSelectorProps> = () => {
  return (
    <Flex display='flex' align='center' gap='2'>
      <Text className='md:text-md text-sm text-[var(--gray-11)]'>
        Items per page
      </Text>
      <Select.Root size='2' defaultValue={PAGE_SIZE_OPTIONS[0].value}>
        <Select.Trigger />
        <Select.Content>
          {PAGE_SIZE_OPTIONS.map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

export default PageSizeSelector;
