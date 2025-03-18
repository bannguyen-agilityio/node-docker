import z from 'zod';

import { logWarn } from '../logger';

const envSchema = z.object({
  IS_DEBUGGING: z.string().optional(),
  AIRTABLE_API_KEY: z.string().trim().min(1),
  AIRTABLE_WEBHOOK_URL: z.string().trim().min(1),
  AIRTABLE_BASE_ID: z.string().trim().min(1),
  AIRTABLE_POSTS_TABLE_NAME: z.string().trim().min(1),
  AIRTABLE_NOTIFICATION_URL: z.string().trim().min(1),
  AIRTABLE_WEBHOOK_MAC_SECRET: z.string().trim().min(1),
  DB_ENDPOINT: z.string().trim().min(1),
  DB_KEY: z.string().trim().min(1),
  GOOGLE_DIR_GROUP: z.string().trim().min(1),
  GOOGLE_CLIENT_ID: z.string().trim().min(1),
  GOOGLE_CLIENT_SECRET: z.string().trim().min(1),
  GOOGLE_CREDENTIALS: z.string().trim().min(1),
  AUTH_SECRET: z.string().trim().min(1),
});

const envParsed = envSchema.safeParse({
  IS_DEBUGGING: process.env.IS_DEBUGGING,
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  AIRTABLE_WEBHOOK_URL: process.env.AIRTABLE_WEBHOOK_URL,
  AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
  AIRTABLE_POSTS_TABLE_NAME: process.env.AIRTABLE_POSTS_TABLE_NAME,
  AIRTABLE_NOTIFICATION_URL: process.env.AIRTABLE_NOTIFICATION_URL,
  AIRTABLE_WEBHOOK_MAC_SECRET: process.env.AIRTABLE_WEBHOOK_MAC_SECRET,
  DB_ENDPOINT: process.env.DB_ENDPOINT,
  DB_KEY: process.env.DB_KEY,
  GOOGLE_DIR_GROUP: process.env.GOOGLE_DIR_GROUP,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  AUTH_SECRET: process.env.AUTH_SECRET,
  GOOGLE_CREDENTIALS: process.env.GOOGLE_CREDENTIALS,
});

if (!envParsed.success) {
  const error = envParsed.error.message;
  logWarn('Invalid environment variables', { meta: error });
}

export const API_ENV = envParsed.data || ({} as z.infer<typeof envSchema>);
