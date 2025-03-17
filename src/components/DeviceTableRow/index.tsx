import { Table, Switch } from '@radix-ui/themes';

// Constants
import { ACCOUNT_STATUS } from '@/constants';

// Components
import { Status } from '@/components';

interface DeviceTableRowProps {
  deviceId: number;
  deviceName: string;
  deviceModel: string;
  devicePlatForm: string;
  deviceAccountName: string;
  status: keyof typeof ACCOUNT_STATUS;
}

const DeviceTableRow = ({
  deviceId,
  deviceName,
  deviceModel,
  devicePlatForm,
  deviceAccountName,
  status,
}: DeviceTableRowProps) => {
  return (
    <Table.Row>
      <Table.RowHeaderCell>{deviceId}</Table.RowHeaderCell>
      <Table.Cell>{deviceName}</Table.Cell>
      <Table.Cell>{deviceModel}</Table.Cell>
      <Table.RowHeaderCell>{devicePlatForm}</Table.RowHeaderCell>
      <Table.Cell>{deviceAccountName}</Table.Cell>
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
