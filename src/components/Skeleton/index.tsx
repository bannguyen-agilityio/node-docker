// Utils
import { tw } from '@/utils';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return <div className={tw('animate-pulse rounded bg-gray-200', className)} />;
};

export default Skeleton;
