import { Table, Switch } from '@radix-ui/themes';

// Constants
import { ACCOUNT_STATUS } from '@/constants';

// Components
import { Status } from '@/components';

interface DeviceTableRowProps {
  id: number;
  name: string;
  model: string;
  platForm: string;
  accountName: string;
  status: keyof typeof ACCOUNT_STATUS;
}

const DeviceTableRow = ({
  id,
  name,
  model,
  platForm,
  accountName,
  status,
}: DeviceTableRowProps) => {
  return (
    <Table.Row>
      <Table.RowHeaderCell>{id}</Table.RowHeaderCell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{model}</Table.Cell>
      <Table.RowHeaderCell>{platForm}</Table.RowHeaderCell>
      <Table.Cell>{accountName}</Table.Cell>
      <Table.Cell className='text-center'>
        <Status status={ACCOUNT_STATUS[status]} />
      </Table.Cell>
      <Table.Cell className='text-center'>
        <Switch defaultChecked />
      </Table.Cell>
    </Table.Row>
  );
};

export default DeviceTableRow;
