import { CallbacksOptions, NextAuthOptions, Profile } from 'next-auth';
import Google from 'next-auth/providers/google';

// Constants
import { ROUTES } from '@/constants';

// Utils
import { checkGroupAccess, verifyEmailDomain } from '@/utils';

// Services
import { fetchGroupsByEmail } from '@/services';

interface SignInCallbackParameters
  extends Omit<Parameters<CallbacksOptions['signIn']>[0], 'profile'> {
  profile?: Profile & Partial<Record<'email_verified' | 'email', string>>;
}

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
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
      if (account?.provider === 'google') {
        const email: string = profile?.email ?? '';

        if (!(profile?.email_verified && verifyEmailDomain(email))) {
          return false;
        }

        const groups = await fetchGroupsByEmail(email);

        return groups.some(({ email }) => checkGroupAccess(email ?? ''));
      }

      return false;
    },
  },
};
