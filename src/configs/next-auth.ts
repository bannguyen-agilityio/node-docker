import { CallbacksOptions, NextAuthOptions, Profile } from 'next-auth';
import Google from 'next-auth/providers/google';

// Constants
import { ROUTES, AUTHORIZED_GROUPS } from '@/constants';

// Utils
import { verifyEmailDomain } from '@/utils';

// Services
import { checkEmailInGroup } from '@/services';

// Envs
import { API_ENV } from '@/app/api/_common/env';

interface SignInCallbackParameters
  extends Omit<Parameters<CallbacksOptions['signIn']>[0], 'profile'> {
  profile?: Profile & Partial<Record<'email_verified' | 'email', string>>;
}

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: API_ENV.GOOGLE_CLIENT_ID,
      clientSecret: API_ENV.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: ROUTES.SIGN_IN,
    error: ROUTES.SIGN_IN,
  },
  callbacks: {
    signIn: async ({
      account,
      profile,
    }: SignInCallbackParameters): Promise<boolean> => {
      const email: string = profile?.email ?? '';
      const isGoogleProvider: boolean = account?.provider === 'google';
      const isValidEmail: boolean = !!(
        profile?.email_verified && verifyEmailDomain(email)
      );

      if (isGoogleProvider && isValidEmail) {
        return await checkEmailInGroup(email, AUTHORIZED_GROUPS[0]);
      }

      return false;
    },
  },
};
