// Interface
import { AddClassProp } from '@/interfaces';

// Constants
import { StatusType } from '@/constants';

// Utils
import { tw } from '@/utils/tailwind';

type StatusProps = {
  status: StatusType;
  className?: string;
};

const statusColors: Record<StatusType, string> = {
  [StatusType.ACTIVE]: 'bg-green-500',
  [StatusType.ONLINE]: 'bg-green-500',
  [StatusType.BANNED]: 'bg-red-600',
  [StatusType.FAILED]: 'bg-yellow-500',
  [StatusType.OFFLINE]: 'bg-gray-400',
  [StatusType.ENGAGEMENT]: 'bg-gray-400',
};

const Status: React.FC<AddClassProp<StatusProps>> = ({ status, className }) => {
  return (
    <span
      className={tw(
        'rounded-full px-4 py-1 font-medium text-white capitalize',
        statusColors[status],
        className,
      )}
    >
      {status}
    </span>
  );
};

export default Status;
