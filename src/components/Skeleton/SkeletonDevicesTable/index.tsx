import { Skeleton, Table } from '@radix-ui/themes';

// Components
import { DeviceTableRowSkeleton } from '@/components';

const DevicesTableSkeleton = () => {
  return (
    <Table.Root variant='surface' className='w-full flex-1'>
      <Table.Header className='rounded-[inherit] bg-gray-200'>
        <Table.Row className='rounded-[inherit] text-base text-[var(--gray-11)]'>
          <Table.ColumnHeaderCell>
            <Skeleton width='45px' height='25px' />
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>
            <Skeleton width='120px' height='25px' />
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>
            <Skeleton width='120px' height='25px' />
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>
            <Skeleton width='120px' height='25px' />
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>
            <Skeleton width='120px' height='25px' />
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='text-center'>
            <Skeleton width='85px' height='25px' className='rounded-full' />
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='text-center'>
            <Skeleton width='45px' height='25px' className='rounded-full' />
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body className='text-base'>
        {Array.from({ length: 20 }).map((_, index) => (
          <DeviceTableRowSkeleton key={index} />
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default DevicesTableSkeleton;
