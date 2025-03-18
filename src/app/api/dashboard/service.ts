import { Container } from '@azure/cosmos';

import {
  ContainerIds,
  GetDbContainerType,
  getDBContainer,
} from '@api/_common/db';
import { logError, logInfo } from '@api/_common/logger';

import { GetDashboardOverviewResponse } from './type';

export const getDashboardOverview = async (
  getContainer: GetDbContainerType = getDBContainer,
): Promise<GetDashboardOverviewResponse> => {
  logInfo('Getting dashboard overview');
  try {
    const devicesContainer = await getContainer(ContainerIds.DEVICES);
    const issuesContainer = await getContainer(ContainerIds.ISSUES);

    const [totalDevices, issuesPerDay, recentIssues] = await Promise.all([
      getTotalDevices(devicesContainer),
      getIssuesPerDay(issuesContainer),
      getRecentIssues(issuesContainer),
    ]);

    return {
      totalDevices,
      issuesPerDay,
      recentIssues,
    };
  } catch (error) {
    logError('Failed to get dashboard overview', { meta: error });

    throw error;
  }
};

export const getTotalDevices = async (
  devicesContainer: Container,
): Promise<number> => {
  logInfo('Getting total devices');

  const querySpec = {
    query: 'SELECT VALUE COUNT(1) FROM Devices d WHERE d.status = @status',
    parameters: [{ name: '@status', value: 'active' }],
  };

  try {
    const { resources } = await devicesContainer.items
      .query(querySpec)
      .fetchAll();

    return resources[0];
  } catch (error) {
    logError('Failed to get total devices', { meta: error });

    throw error;
  }
};

export const getIssuesPerDay = async (
  issuesContainer: Container,
): Promise<GetDashboardOverviewResponse['issuesPerDay']> => {
  logInfo('Getting issues per day');

  // Current date in "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().split('T')[0];

  const querySpec = {
    query: `
      SELECT i.type
      FROM Issues i
      WHERE STARTSWITH(i.createdAt, @currentDate)
        AND (i.type = 'post_failed' OR i.type = 'account_banned')
    `,
    parameters: [{ name: '@currentDate', value: currentDate }],
  };

  try {
    const { resources } = await issuesContainer.items
      .query(querySpec)
      .fetchAll();

    // Initialize counts
    let failedPosts = 0;
    let bannedAccounts = 0;

    resources.forEach((item: { type: string }) => {
      if (item.type === 'post_failed') {
        failedPosts++;
      } else if (item.type === 'account_banned') {
        bannedAccounts++;
      }
    });

    return {
      failedPosts,
      bannedAccounts,
    };
  } catch (error) {
    logError('Failed to get issues per day', { meta: error });

    throw error;
  }
};

export const getRecentIssues = async (issuesContainer: Container) => {
  logInfo('Getting recent issues');

  // Query for top 5 recent issues, only selecting necessary columns
  const querySpec = {
    query: `
      SELECT TOP 5 i.id, i.createdAt, i.type, i.instagramAccount
      FROM Issues i
      ORDER BY i.createdAt DESC
    `,
  };

  try {
    const { resources } = await issuesContainer.items
      .query(querySpec)
      .fetchAll();

    return resources;
  } catch (error) {
    logError('Failed to get recent issues', { meta: error });

    throw error;
  }
};
