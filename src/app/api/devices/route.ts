import { apiHandler } from '@api/_common/handlers';
import {
  sendSuccessResponse,
  sendPaginatedResponseWithMetadata,
} from '@api/_common/response';
import { logInfo } from '@api/_common/logger';
import { ApiHandler, PaginationMeta } from '@api/_common/types';
import { CreateDeviceResponse, GetDeviceResponse } from './_type';
import { createDeviceRequestSchema } from './_schema';

const getDevicesHandler: ApiHandler = async (req) => {
  logInfo('Get Devices', { req });

  return sendPaginatedResponseWithMetadata<GetDeviceResponse[], PaginationMeta>(
    req,
    200,
    [],
    { currentPage: 1, itemsPerPage: 20, totalItems: 100 },
  );
};

const createDevicesHandler: ApiHandler = async (req) => {
  logInfo('Get Devices', { req });

  const data = createDeviceRequestSchema.parse(await req.json());

  return sendSuccessResponse<CreateDeviceResponse>(req, 201, {
    ...data,
    id: `${Math.random().toString(36).substring(2)}`,
  });
};

export const GET = apiHandler(getDevicesHandler);
export const POST = apiHandler(createDevicesHandler);
