import { Table, Switch } from '@radix-ui/themes';

// Constants
import { AccountStatus, MediaPlatform } from '@/constants';

// Components
import { Status } from '@/components';

interface DeviceTableRowProps {
  id: number;
  name: string;
  model: string;
  platform: string;
  accountName: string;
  status: AccountStatus;
}

const DeviceTableRow = ({
  id,
  name,
  model,
  platform = MediaPlatform.INSTAGRAM,
  accountName,
  status,
}: DeviceTableRowProps) => {
  return (
    <Table.Row>
      <Table.RowHeaderCell>{id}</Table.RowHeaderCell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{model}</Table.Cell>
      <Table.RowHeaderCell>{platform}</Table.RowHeaderCell>
      <Table.Cell>{accountName}</Table.Cell>
      <Table.Cell className='text-center'>
        <Status status={status} />
      </Table.Cell>
      <Table.Cell className='text-center'>
        <Switch defaultChecked />
      </Table.Cell>
    </Table.Row>
  );
};

export default DeviceTableRow;
