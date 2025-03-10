// Interface
import { AddClassProp } from '@/interfaces';

export enum StatusType {
  ONLINE = 'online',
  ACTIVE = 'active',
  BANNED = 'banned',
  FAILED = 'failed',
  OFFLINE = 'offline',
  ENGAGEMENT = 'engagement',
}

type StatusProps = {
  status: StatusType;
  className?: string;
};

const Status: React.FC<AddClassProp<StatusProps>> = ({ status, className }) => {
  const statusColors: Record<StatusType, string> = {
    [StatusType.ACTIVE]: 'bg-green-500',
    [StatusType.ONLINE]: 'bg-green-500',
    [StatusType.BANNED]: 'bg-red-600',
    [StatusType.FAILED]: 'bg-yellow-500',
    [StatusType.OFFLINE]: 'bg-gray-400',
    [StatusType.ENGAGEMENT]: 'bg-gray-400',
  };

  return (
    <span
      className={`rounded-full px-4 py-1 font-medium text-white ${statusColors[status]} ${className}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default Status;
