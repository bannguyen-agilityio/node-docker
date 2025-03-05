import { z } from 'zod';

export const createDeviceRequestSchema = z.object({
  name: z.string().min(1, 'The name field must be at least 1 character'),
});

export const createDeviceResponseSchema = createDeviceRequestSchema.extend({
  id: z.string().uuid(),
});

export const getDeviceResponseSchema = createDeviceResponseSchema;
