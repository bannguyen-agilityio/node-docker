import { useSearchParams as useSearchParamsNext } from 'next/navigation';

export const useSearchParams = () => {
  const searchParams = useSearchParamsNext();

  const get = (name: string) => searchParams.get(name) ?? '';

  return { ...searchParams, get };
};
