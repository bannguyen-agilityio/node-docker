const LatestIssuesSkeleton: React.FC = () => {
  return (
    <div className='rounded-lg border border-[var(--gray-6)] p-5 shadow-sm'>
      <div className='mb-2 h-6 w-32 animate-pulse rounded bg-gray-200' />
      <div className='mb-4 h-4 w-48 animate-pulse rounded bg-gray-200' />
      <ul className='space-y-4'>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className='flex items-center gap-5'>
            <div className='h-5 w-5 animate-pulse rounded-full bg-gray-200' />
            <div className='flex-1'>
              <div className='h-4 w-64 animate-pulse rounded bg-gray-200' />
            </div>
            <div className='h-4 w-12 animate-pulse rounded bg-gray-200' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestIssuesSkeleton;
