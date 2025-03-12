import { apiHandler } from '@api/_common/handlers';

import { ApiHandler } from '@api/_common/types';
import { sendSuccessResponse } from '@api/_common/response';
import { validateMacSecretWebhook } from './validate-webhook';

const receiveWebhookHandler: ApiHandler = async (req) => {
  const body = await req.json();
  return sendSuccessResponse(req, 200, { message: 'Webhook received', body });
};

export const POST = apiHandler(receiveWebhookHandler, validateMacSecretWebhook);
