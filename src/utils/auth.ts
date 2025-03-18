// Constants
import { AUTH_MESSAGES, EMAIL_DOMAIN, GENERAL_MESSAGES } from '@/constants';

export const getAuthenticationErrorMessage = (errorType: string): string => {
  // Note: The 'Callback' or '...' key is the rule of NextAuth
  const errorMessage: Record<string, string> = {
    ...(errorType && { [errorType]: GENERAL_MESSAGES.SOMETHING_WENT_WRONG }),
    Callback: AUTH_MESSAGES.USER_HAS_NO_PERMISSION,
    AccessDenied: AUTH_MESSAGES.USER_HAS_NO_PERMISSION,
    OAuthCallback: AUTH_MESSAGES.USER_HAS_NO_PERMISSION,
  };

  return errorMessage[errorType] || '';
};

export const verifyEmailDomain = (email: string): boolean =>
  email.endsWith(EMAIL_DOMAIN);
