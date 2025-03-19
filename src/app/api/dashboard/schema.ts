import { z } from 'zod';

export const getDashboardOverviewResponseSchema = z.object({
  totalDevices: z.number(),
  issuesPerDay: z.object({
    failedPosts: z.number(),
    bannedAccounts: z.number(),
  }),
  recentIssues: z.array(
    z.object({
      type: z.string(),
      description: z.string(),
      instagramAccount: z.string(),
      instagramAccountName: z.string(),
      createdAt: z.string(),
    }),
  ),
});
