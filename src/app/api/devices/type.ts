import { z } from 'zod';

import {
  getDeviceResponseSchema,
  createDeviceRequestSchema,
  createDeviceResponseSchema,
} from './schema';

export type GetDeviceResponse = z.infer<typeof getDeviceResponseSchema>;

export type CreateDeviceRequest = z.infer<typeof createDeviceRequestSchema>;
export type CreateDeviceResponse = z.infer<typeof createDeviceResponseSchema>;
