import { ApiHandler, ApiMiddleware } from '../types';
import { errorHandler } from './error-handler';

export const apiHandler = (
  handler: ApiHandler,
  ...middlewares: ApiMiddleware[]
): ApiHandler => {
  // Compose middleware
  const composedHandler: ApiHandler = middlewares.reduceRight(
    (acc, middleware) => middleware(acc),
    handler,
  );

  return errorHandler(composedHandler);
};
