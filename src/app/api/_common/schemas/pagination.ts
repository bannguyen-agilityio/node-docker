import { z } from 'zod';

export const paginationQueryParamSchema = z.object({
  page: z
    .string()
    .optional()
    .transform((val) => {
      const result = parseInt(val || '');

      return result === 0 || result ? result : 1;
    })
    .pipe(z.number().min(1, 'The page field must be greater than 0')),
  pageSize: z
    .string()
    .optional()
    .transform((val) => {
      const result = parseInt(val || '');

      return result === 0 || result ? result : 100;
    })
    .pipe(z.number().min(1, 'The pageSize field must be greater than 0')),
});
