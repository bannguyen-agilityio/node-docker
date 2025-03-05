import { z } from 'zod';

import { paginationQueryParamSchema } from '../schemas';

export interface PaginationMeta {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export type PaginationQueryParam = z.infer<typeof paginationQueryParamSchema>;
