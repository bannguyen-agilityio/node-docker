import { ContainerDefinition, CosmosClient } from '@azure/cosmos';

import { API_ENV } from '../env';
import { ContainerIds, DATABASE_ID, PARTITION_KEYS } from './constants';

const { DB_ENDPOINT, DB_KEY } = API_ENV;

// Create Cosmos client
const client = new CosmosClient({ endpoint: DB_ENDPOINT, key: DB_KEY });

/**
 * Get a Cosmos container
 * @param containerId The ID of the container to create or retrieve
 * @returns The Cosmos container
 */
export const getContainer = async (
  containerId: ContainerIds,
  options: ContainerDefinition = {},
) => {
  // Create a database if it doesn't exist
  const { database } = await client.databases.createIfNotExists({
    id: DATABASE_ID,
  });

  const partitionKey = PARTITION_KEYS[containerId];

  const containerDefinition: ContainerDefinition = {
    id: containerId,
    partitionKey: {
      paths: partitionKey,
    },
    ...options,
  };

  if (containerId === ContainerIds.PROCESSED_WEBHOOKS) {
    // Set the default TTL to 30 days for the ProcessedWebhooks container
    containerDefinition.defaultTtl = 60 * 60 * 24 * 30;
  }

  // Create a container if it doesn't exist
  const { container } =
    await database.containers.createIfNotExists(containerDefinition);

  return container;
};
