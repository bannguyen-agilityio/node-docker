import { z } from 'zod';

import {
  getDeviceResponseSchema,
  createDeviceRequestSchema,
  createDeviceResponseSchema,
} from './_schema';

export type GetDeviceResponse = z.infer<typeof getDeviceResponseSchema>;

export type CreateDeviceRequest = z.infer<typeof createDeviceRequestSchema>;
export type CreateDeviceResponse = z.infer<typeof createDeviceResponseSchema>;
