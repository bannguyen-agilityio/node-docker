import { Text } from '@radix-ui/themes';

// Interface
import { AddClassProp } from '@/interfaces';

// Constants
import { StatusType } from '@/constants';

// Utils
import { tw } from '@/utils/tailwind';

type StatusProps = {
  status: StatusType | string;
  className?: string;
};

const Status: React.FC<AddClassProp<StatusProps>> = ({ status, className }) => {
  const statusColors: Record<StatusType | string, string> = {
    [status]: 'border border-[var(--gray-7)] text-[var(--gray-12)] normal-case',
    [StatusType.ACTIVE]: 'bg-green-500',
    [StatusType.ONLINE]: 'bg-green-500',
    [StatusType.BANNED]: 'bg-red-600',
    [StatusType.FAILED]: 'bg-yellow-500',
    [StatusType.OFFLINE]: 'bg-gray-400',
    [StatusType.ENGAGEMENT]: 'bg-gray-400',
  };

  return (
    <Text
      as='span'
      className={tw(
        'rounded-full px-4 py-1 text-sm font-medium text-white capitalize',
        statusColors[status],
        className,
      )}
    >
      {status}
    </Text>
  );
};

export default Status;
