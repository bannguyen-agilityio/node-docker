import {
  ContainerDefinition,
  CosmosClient,
  PartitionKeyDefinitionVersion,
  PartitionKeyKind,
} from '@azure/cosmos';

import { API_ENV } from '../env';
import { ContainerIds, DATABASE_ID, PARTITION_KEYS } from './constants';

const { DB_ENDPOINT, DB_KEY } = API_ENV;

let client: CosmosClient;

/**
 * Get a Cosmos container
 * @param containerId The ID of the container to create or retrieve
 * @returns The Cosmos container
 */
export const getDBContainer = async (
  containerId: ContainerIds,
  options: ContainerDefinition = {},
) => {
  if (!client) {
    // Create Cosmos client
    client = new CosmosClient({ endpoint: DB_ENDPOINT, key: DB_KEY });
  }

  // Create a database if it doesn't exist
  const { database } = await client.databases.createIfNotExists({
    id: DATABASE_ID,
  });

  const partitionKey = PARTITION_KEYS[containerId];

  const containerDefinition: ContainerDefinition = {
    id: containerId,
    partitionKey: {
      paths: partitionKey,
      version: PartitionKeyDefinitionVersion.V2,
      kind:
        partitionKey.length > 1
          ? PartitionKeyKind.MultiHash
          : PartitionKeyKind.Hash,
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
