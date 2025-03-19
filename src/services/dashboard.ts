// Types
import { DashBoardOverview } from '@/interfaces';

export const getDashboardOverview = async (): Promise<DashBoardOverview> => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL ?? ''}/api/dashboard/overview`,
    );

    if (res.ok) {
      const data: DashBoardOverview = await res.json();

      return data;
    }

    return {
      totalDevices: 0,
      issuesPerDay: {
        bannedAccounts: 0,
        failedPosts: 0,
      },
      recentIssues: [],
    };
  } catch (error) {
    console.log(error);

    return {
      totalDevices: 0,
      issuesPerDay: {
        bannedAccounts: 0,
        failedPosts: 0,
      },
      recentIssues: [],
    };
  }
};
