// Constants
import { AUTH_MESSAGES, AUTHORIZED_GROUPS, EMAIL_DOMAIN } from '@/constants';

export const getAuthenticationErrorMessage = (errorType: string): string => {
  // Note: The 'Callback' key is the rule of NextAuth
  const errorMessage = {
    [errorType]: '',
    Callback: AUTH_MESSAGES.USER_HAS_NO_PERMISSION,
    AccessDenied: AUTH_MESSAGES.USER_HAS_NO_PERMISSION,
    OAuthCallback: AUTH_MESSAGES.USER_HAS_NO_PERMISSION,
  };

  return errorMessage[errorType];
};

export const verifyEmailDomain = (email: string): boolean =>
  email.endsWith(EMAIL_DOMAIN);

export const checkGroupAccess = (group: string): boolean =>
  AUTHORIZED_GROUPS.includes(group);
