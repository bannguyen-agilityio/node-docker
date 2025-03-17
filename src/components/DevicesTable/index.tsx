import { Table } from '@radix-ui/themes';

// Components
import { DeviceTableRow } from '@/components';

interface DevicesTableProps {
  devices: unknown[]; // TODO: Will update when API ready
}

const DevicesTable = ({ devices }: DevicesTableProps) => {
  return (
    <Table.Root variant='surface' className='w-full flex-1'>
      <Table.Header className='rounded-[inherit] bg-gray-200'>
        <Table.Row className='rounded-[inherit] text-base text-[var(--gray-11)]'>
          <Table.ColumnHeaderCell>No.</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Device Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Model</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Platform</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Account Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='text-center'>
            Account Status
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='text-center'>
            Run Scripts
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body className='text-base'>
        {devices.map((_, index) => (
          <DeviceTableRow
            key={index}
            deviceId={1}
            deviceName='Device 1'
            deviceModel='IPhone 14 Pro Max'
            devicePlatForm='Instagram'
            deviceAccountName='user1'
            status='active'
          />
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default DevicesTable;
