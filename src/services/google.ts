import { google } from 'googleapis';

// Constants
import { GOOGLE_ADMIN_DIR } from '@/constants';

// Envs
import { API_ENV } from '@/app/api/_common/env';

const getAuth = () => {
  const serviceAccount = JSON.parse(API_ENV.GOOGLE_CREDENTIALS);

  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccount,
    scopes: [API_ENV.GOOGLE_DIR_GROUP],
  });

  return auth;
};

export const checkEmailInGroup = async (
  email: string,
  group: string,
): Promise<boolean> => {
  const auth = getAuth();
  const admin = google.admin(GOOGLE_ADMIN_DIR);

  const res = await admin.members.hasMember({
    auth,
    groupKey: group,
    memberKey: email,
  });

  return !!res.data?.isMember;
};
