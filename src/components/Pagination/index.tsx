import { Flex, Box, Text } from '@radix-ui/themes';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons';

// Components
import { PageSizeSelector, Button } from '@/components';

// Utils
import { displayPagination } from '@/utils';

interface PaginationProps {
  totalPage: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPage, currentPage }) => {
  const isNextButtonDisabled: boolean = currentPage === totalPage;
  const isPreviousPageDisabled: boolean = currentPage === 1;

  return (
    <Box>
      <Flex justify='between'>
        <PageSizeSelector />
        <Text className='md:text-md text-sm text-[var(--gray-11)]'>
          Showing 21-40 of 100 devices
        </Text>
      </Flex>
      <Flex align='center' justify='center' gap='3'>
        <Button
          text='Previous'
          variant='pagination'
          isDisable={isPreviousPageDisabled}
          icon={<ChevronLeftIcon />}
        />

        {displayPagination(totalPage, currentPage).map((page, index) => {
          const isActivePage: boolean = page === currentPage;
          return !page ? (
            <DotsHorizontalIcon key={index} />
          ) : (
            <Button
              key={index}
              text={`${page}`}
              variant={isActivePage ? 'secondary' : 'pagination'}
            />
          );
        })}

        <Button
          text='Next'
          variant='pagination'
          icon={<ChevronRightIcon />}
          iconPosition='right'
          isDisable={isNextButtonDisabled}
        />
      </Flex>
    </Box>
  );
};

export default Pagination;
