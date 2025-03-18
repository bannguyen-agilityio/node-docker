import { ApiHandler } from '@api/_common/types';
import { apiHandler } from '@api/_common/handlers';
import { sendSuccessResponse } from '@api/_common/response';

import { refreshAirtableWebhook } from '../../service';

const refreshAirtableWebhookHandler: ApiHandler = async (req) => {
  const result = await refreshAirtableWebhook();

  return sendSuccessResponse(req, 200, result);
};

export const POST = apiHandler(refreshAirtableWebhookHandler);
