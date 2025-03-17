// Constants
import { ROUTES } from '@/constants';

export const checkPage = (pathname: string): string => {
  const routes: string[] = Object.values(ROUTES);
  const isValid: boolean = routes.includes(pathname);

  return isValid ? pathname : ROUTES.DASHBOARD;
};
