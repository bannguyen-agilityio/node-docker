import { createHmac } from 'crypto';

import { ApiMiddleware } from '@api/_common/types';
import { API_ENV } from '@api/_common/env';
import { ApiError } from 'next/dist/server/api-utils';

import { sendErrorResponse } from '../../_common/response';

export const validateMacSecretWebhook: ApiMiddleware = (handler) => {
  return async (req, context) => {
    const { headers } = req;
    const headerHmac = headers.get('X-Airtable-Content-MAC');

    const { AIRTABLE_WEBHOOK_MAC_SECRET } = API_ENV;
    const macSecretDecoded = Buffer.from(AIRTABLE_WEBHOOK_MAC_SECRET, 'base64');

    // Parse the body
    const body = JSON.stringify(await req.clone().json());

    // Create and update HMAC
    const hmac = createHmac('sha256', macSecretDecoded);
    hmac.update(body, 'utf8');

    const expectedContentHmac = `hmac-sha256=${hmac.digest('hex')}`;

    // Return early if HMAC is invalid
    if (headerHmac !== expectedContentHmac) {
      return sendErrorResponse(
        req,
        new ApiError(401, 'Invalid HMAC signature'),
      );
    }

    // Proceed with the handler if valid
    return handler(req, context);
  };
};
