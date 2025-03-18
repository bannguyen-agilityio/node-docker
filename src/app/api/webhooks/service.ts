import { API_ENV } from '@api/_common/env';
import { logError, logInfo } from '@api/_common/logger';
import {
  ContainerIds,
  getDBContainer,
  GetDbContainerType,
  GLOBAL_SETTING_ID,
} from '@api/_common/db';

import { SystemSetting } from './type';

const { AIRTABLE_WEBHOOK_URL, AIRTABLE_API_KEY, AIRTABLE_NOTIFICATION_URL } =
  API_ENV;

export const createAirtableWebhook = async (
  getContainer: GetDbContainerType = getDBContainer,
) => {
  logInfo('Creating Airtable webhook');

  const data = {
    notificationUrl: AIRTABLE_NOTIFICATION_URL,
    specification: {
      options: {
        filters: {
          dataTypes: ['tableData'],
        },
      },
    },
  };

  try {
    const settingsContainer = await getContainer(ContainerIds.SETTINGS);

    const { resource } = await settingsContainer
      .item(GLOBAL_SETTING_ID, GLOBAL_SETTING_ID)
      .read<SystemSetting>();

    if (resource?.webhook?.id) {
      return resource.webhook;
    }

    const response = await fetch(AIRTABLE_WEBHOOK_URL as string, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const err = await response.json();

      throw err;
    }

    const result = await response.json();
    const now = new Date().toISOString();

    // Update the database with the new webhook ID
    const { resource: updatedResource } = await settingsContainer.items.upsert({
      id: GLOBAL_SETTING_ID,
      webhook: {
        id: result.id,
        macSecretBase64: result.macSecretBase64,
        expirationTime: result.expirationTime,
        lastCursor: 1,
        lastRefreshedAt: now,
      },
      createdAt: resource?.createdAt || now,
      updatedAt: resource?.updatedAt || now,
    });

    const webhook = updatedResource?.webhook;

    logInfo('Successfully created Airtable webhook', {
      meta: {
        webhookId: webhook?.id,
      },
    });

    return webhook;
  } catch (error) {
    logError('Failed to create Airtable webhook', { meta: error });

    throw error;
  }
};

export const refreshAirtableWebhook = async (
  getContainer: GetDbContainerType = getDBContainer,
) => {
  logInfo('Refreshing Airtable webhook');

  try {
    const settingsContainer = await getContainer(ContainerIds.SETTINGS);

    const { resource } = await settingsContainer
      .item(GLOBAL_SETTING_ID, GLOBAL_SETTING_ID)
      .read<SystemSetting>();

    const webhookId = resource?.webhook?.id;

    if (!webhookId) {
      throw new Error('Webhook ID not found');
    }

    const url = `${AIRTABLE_WEBHOOK_URL}/${webhookId}/refresh`;

    const response = await fetch(url as string, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const err = await response.json();

      logError('Failed to refresh Airtable webhook', { meta: err });

      throw new Error(err?.message || 'Failed to refresh webhook');
    }

    const result = await response.json();

    await settingsContainer.items.upsert({
      id: GLOBAL_SETTING_ID,
      webhook: {
        ...resource.webhook,
        expirationTime: result.expirationTime,
        lastRefreshedAt: new Date().toISOString(),
      },
    });

    logInfo('Successfully refreshed Airtable webhook', { meta: result });

    return result;
  } catch (error) {
    logError('Failed to refresh Airtable webhook', { meta: error });

    throw error;
  }
};
