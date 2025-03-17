import NextAuth from 'next-auth';

// Configs
import { authOptions } from '@/configs';

const handlers = NextAuth(authOptions);

export { handlers as GET, handlers as POST };
