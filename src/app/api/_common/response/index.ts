import { ApiError } from 'next/dist/server/api-utils';
import { ZodError } from 'zod';

import { PaginationMeta } from '../types';

const getErrorMessage = (error: unknown) => {
  if (error instanceof ZodError) {
    return error.issues[0].message;
  }

  if (error instanceof ApiError) {
    return error.message;
  }

  return 'An unknown error occurred';
};

const getErrorStatus = (error: unknown) => {
  if (error instanceof ZodError) {
    return 400;
  }

  if (error instanceof ApiError) {
    return error.statusCode;
  }

  return 500;
};

export const sendSuccessResponse = <T extends object>(
  req: Request,
  status: number,
  data?: T,
) => {
  if (data === undefined || data === null) {
    return new Response(null, {
      status: 204,
    });
  }

  return Response.json(data, {
    status,
  });
};

export const sendPaginatedResponseWithMetadata = <
  T extends object,
  U extends object,
>(
  req: Request,
  status: number,
  data: T,
  metadata: U & PaginationMeta,
) => {
  const { currentPage: page, itemsPerPage, totalItems, ...restMeta } = metadata;
  let currentPage = page;

  if (currentPage <= 0) {
    currentPage = 1;
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage =
    currentPage < totalPages && currentPage >= 1 ? currentPage + 1 : null;

  const previousPage =
    currentPage > 1 && currentPage <= totalPages ? currentPage - 1 : null;

  const pagination = {
    currentPage,
    itemsPerPage,
    totalItems,
    totalPages,
    nextPage,
    previousPage,
  };

  return sendSuccessResponse(req, status, {
    data,
    meta: {
      pagination,
      ...restMeta,
    },
  });
};

export const sendErrorResponse = (req: Request, error: unknown) => {
  const isDebugging = process.env.IS_DEBUGGING === 'true';
  const status = getErrorStatus(error);
  const message = getErrorMessage(error);

  return Response.json(
    {
      message,
      ...(isDebugging && {
        method: req.method,
        url: req.url,
        timestamp: new Date().toISOString(),
        error: {
          cause: error,
          stack: (error as Error).stack,
        },
      }),
    },
    {
      status,
    },
  );
};
