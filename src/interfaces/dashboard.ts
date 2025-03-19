// Constants
import { IssueStatus } from '@/constants';

export interface DashBoardOverview {
  totalDevices: number;
  issuesPerDay: {
    failedPosts: number;
    bannedAccounts: number;
  };
  recentIssues: {
    id: string;
    createdAt: string;
    type: IssueStatus;
    instagramAccount: string;
    instagramAccountName: string;
  }[];
}
