export const DATABASE_ID = 'AdminDashboard';

export enum ContainerIds {
  POSTS = 'Posts',
  DEVICES = 'Devices',
  ISSUES = 'Issues',
  PROFILE_CHANGES = 'ProfileChanges',
  SETTINGS = 'Settings',
  PROCESSED_WEBHOOKS = 'ProcessedWebhooks',
}

export const PARTITION_KEYS = {
  [ContainerIds.POSTS]: ['/id'],
  [ContainerIds.DEVICES]: ['/id'],
  [ContainerIds.ISSUES]: ['/deviceId', '/type', '/id'],
  [ContainerIds.PROFILE_CHANGES]: ['/id'],
  [ContainerIds.SETTINGS]: ['/id'],
  [ContainerIds.PROCESSED_WEBHOOKS]: ['/id'],
};

export const GLOBAL_SETTING_ID = 'Global_Setting';
