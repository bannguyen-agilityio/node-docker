import { Timestamp } from '@api/_common/types';

export interface SystemSetting extends Timestamp {
  // Unique identifier for the setting
  id: string;

  // Schedule information for the setting
  schedule: {
    // Cron-like expression that defines when the setting should run
    // https://crontab.guru/
    expression: string;

    // The time when the schedule starts
    startAt: string;

    // The time when the setting was last executed
    lastRunAt: string;
  };

  // Webhook details associated with the setting
  webhook: {
    // Unique identifier for the webhook
    id: string;

    // The cursor value used for pagination or tracking state in the webhook's processing
    lastCursor: number;

    // The timestamp of the last time the webhook was refreshed
    lastRefreshedAt: string;
  };
}

export interface ProcessedWebhook extends Timestamp {
  // Unique identifier for the processed webhook (baseTransactionNumber)
  id: string;
}
