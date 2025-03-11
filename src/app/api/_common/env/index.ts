import z from 'zod';

import { logError } from '../logger';

const envSchema = z.object({
  IS_DEBUGGING: z.string().trim().min(1),
  AIRTABLE_API_KEY: z.string().trim().min(1),
  AIRTABLE_WEBHOOK_URL: z.string().trim().min(1),
  AIRTABLE_BASE_ID: z.string().trim().min(1),
  AIRTABLE_POSTS_TABLE_NAME: z.string().trim().min(1),
  AIRTABLE_NOTIFICATION_URL: z.string().trim().min(1),
  DB_ENDPOINT: z.string().trim().min(1),
  DB_KEY: z.string().trim().min(1),
});

const envParsed = envSchema.safeParse({
  IS_DEBUGGING: process.env.IS_DEBUGGING,
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  AIRTABLE_WEBHOOK_URL: process.env.AIRTABLE_WEBHOOK_URL,
  AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
  AIRTABLE_POSTS_TABLE_NAME: process.env.AIRTABLE_POSTS_TABLE_NAME,
  AIRTABLE_NOTIFICATION_URL: process.env.AIRTABLE_NOTIFICATION_URL,
  DB_ENDPOINT: process.env.DB_ENDPOINT,
  DB_KEY: process.env.DB_KEY,
});

if (!envParsed.success) {
  const error = envParsed.error;
  logError('Invalid environment variables', { meta: error });

  throw error;
}

export const API_ENV = envParsed.data;
