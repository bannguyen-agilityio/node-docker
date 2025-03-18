import { z } from 'zod';

import { getDashboardOverviewResponseSchema } from './schema';

export type GetDashboardOverviewResponse = z.infer<
  typeof getDashboardOverviewResponseSchema
>;
