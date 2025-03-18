import { ApiHandler } from '@api/_common/types';
import { apiHandler } from '@api/_common/handlers';
import { sendSuccessResponse } from '@api/_common/response';

import { createAirtableWebhook } from '../service';

const createAirtableWebhookHandler: ApiHandler = async (req) => {
  const webhook = await createAirtableWebhook();

  return sendSuccessResponse(req, 201, webhook);
};

export const POST = apiHandler(createAirtableWebhookHandler);
