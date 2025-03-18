import { Table, Skeleton } from '@radix-ui/themes';

const DeviceTableRowSkeleton = () => {
  return (
    <Table.Row>
      <Table.RowHeaderCell>
        <Skeleton width='45px' height='25px' />
      </Table.RowHeaderCell>
      <Table.Cell>
        <Skeleton width='120px' height='25px' />
      </Table.Cell>
      <Table.Cell>
        <Skeleton width='120px' height='25px' />
      </Table.Cell>
      <Table.Cell>
        <Skeleton width='120px' height='25px' />
      </Table.Cell>
      <Table.Cell>
        <Skeleton width='120px' height='25px' />
      </Table.Cell>
      <Table.Cell className='text-center'>
        <Skeleton width='85px' height='25px' className='rounded-full' />
      </Table.Cell>
      <Table.Cell className='text-center'>
        <Skeleton width='45px' height='25px' className='rounded-full' />
      </Table.Cell>
    </Table.Row>
  );
};

export default DeviceTableRowSkeleton;
