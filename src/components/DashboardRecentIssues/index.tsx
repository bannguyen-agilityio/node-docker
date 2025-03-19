import React from 'react';

// Components
import { LatestIssues } from '@/components';

// Services
import { getDashboardOverview } from '@/services/dashboard';

const DashboardRecentIssues = async () => {
  const { recentIssues } = await getDashboardOverview();

  return <LatestIssues issues={recentIssues} />;
};

export default DashboardRecentIssues;
