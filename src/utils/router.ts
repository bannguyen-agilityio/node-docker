// Constants
import { ROUTES } from '@/constants';

export const checkPage = (pathname: string): string => {
  if (!pathname.trim()) return ROUTES.DASHBOARD;

  const routes: string[] = Object.values(ROUTES).filter((route) =>
    Boolean(route.trim()),
  );
  const isValid: boolean = routes.includes(pathname);

  return isValid ? pathname : ROUTES.DASHBOARD;
};
