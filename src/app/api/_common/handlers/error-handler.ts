import { logError } from '../logger';
import { sendErrorResponse } from '../response';
import { ApiHandler } from '../types';

const normalizeError = (error: unknown): Error => {
  if (error instanceof Error) {
    return error;
  }

  if (typeof error === 'string') {
    return new Error(error);
  }

  return new Error('An unknown error occurred');
};

export const errorHandler = (handler: ApiHandler): ApiHandler => {
  return async (req, ctx) => {
    try {
      return await handler(req, ctx);
    } catch (err) {
      const error = normalizeError(err);

      logError(`Request Error: [${req.method}] ${req.url} - ${error.message}`, {
        req,
        meta: error,
      });

      return sendErrorResponse(req, error);
    }
  };
};
