import { ApiHandler } from '@api/_common/types';
import { apiHandler } from '@api/_common/handlers';
import { sendSuccessResponse } from '@api/_common/response';
import { ContainerIds, getContainer } from '@api/_common/db';

import { createAirtableWebhook } from '../service';

const createAirtableWebhookHandler: ApiHandler = async (req) => {
  const settingsContainer = await getContainer(ContainerIds.SETTINGS);
  const webhook = await createAirtableWebhook(settingsContainer);

  return sendSuccessResponse(req, 201, webhook);
};

export const POST = apiHandler(createAirtableWebhookHandler);
