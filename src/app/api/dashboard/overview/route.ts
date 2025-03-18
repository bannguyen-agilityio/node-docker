import { apiHandler } from '@api/_common/handlers';
import { sendSuccessResponse } from '@api/_common/response';
import { logInfo } from '@api/_common/logger';
import { ApiHandler } from '@api/_common/types';

import { GetDashboardOverviewResponse } from '../type';
import { getDashboardOverview } from '../service';

const getDashboardOverviewHandler: ApiHandler = async (req) => {
  logInfo('Getting dashboard overview', { req });

  const overview = await getDashboardOverview();

  return sendSuccessResponse<GetDashboardOverviewResponse>(req, 200, overview);
};

export const GET = apiHandler(getDashboardOverviewHandler);
