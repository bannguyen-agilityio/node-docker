import { ApiHandler } from '@api/_common/types';
import { apiHandler } from '@api/_common/handlers';
import { sendSuccessResponse } from '@api/_common/response';
import { ContainerIds, getContainer } from '@api/_common/db';

import { refreshAirtableWebhook } from '../../service';

const settingsContainer = await getContainer(ContainerIds.SETTINGS);

const refreshAirtableWebhookHandler: ApiHandler = async (req) => {
  const result = await refreshAirtableWebhook(settingsContainer);

  return sendSuccessResponse(req, 200, result);
};

export const POST = apiHandler(refreshAirtableWebhookHandler);
