import { admin_directory_v1, google } from 'googleapis';

// Constants
import { EMAIL_DOMAIN, GOOGLE_ADMIN_DIR } from '@/constants';

const getAuth = () => {
  const serviceAccount = JSON.parse(process.env.GOOGLE_CREDENTIALS || '');

  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccount,
    scopes: [
      process.env.GOOGLE_DIR_GROUP ?? '',
      process.env.GOOGLE_DIR_USER ?? '',
    ],
  });

  return auth;
};

export const fetchGroupsByEmail = async (
  email: string,
): Promise<admin_directory_v1.Schema$Group[]> => {
  const auth = getAuth();
  const admin = google.admin(GOOGLE_ADMIN_DIR);
  const {
    data: { groups = [] },
  } = await admin.groups.list({
    auth,
    domain: EMAIL_DOMAIN,
    userKey: email,
    maxResults: 100,
  });

  return groups;
};
