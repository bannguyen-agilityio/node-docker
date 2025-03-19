import { signIn, signOut } from 'next-auth/react';
import { useCallback, useState } from 'react';

// Constants
import { ROUTES, SEARCH_PARAMS_KEY } from '@/constants';

// Hooks
import { useSearchParams } from '@/hooks';

// Utils
import { checkPage, getAuthenticationErrorMessage } from '@/utils';

export const useAuthentication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const errorMessage = getAuthenticationErrorMessage(
    searchParams.get(SEARCH_PARAMS_KEY.ERROR),
  );

  const handleSignIn = useCallback(async () => {
    setIsSubmitting(true);
    const res = await signIn('google', {
      callbackUrl: checkPage(searchParams.get(SEARCH_PARAMS_KEY.CALLBACK_URL)),
    });

    if (res) {
      setIsSubmitting(false);
    }
  }, [searchParams]);

  const handleSignOut = useCallback(async () => {
    setIsSubmitting(true);
    const res = await signOut({
      callbackUrl: ROUTES.SIGN_IN,
    });

    if (res) {
      setIsSubmitting(false);
    }
  }, []);

  return {
    isSubmitting,
    errorMessage,
    handleSignIn,
    handleSignOut,
  };
};
