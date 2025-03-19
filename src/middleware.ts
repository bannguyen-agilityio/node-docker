import {
  MiddlewareConfig,
  NextFetchEvent,
  NextRequest,
  NextResponse,
} from 'next/server';
import withAuth from 'next-auth/middleware';
import { getToken, JWT } from 'next-auth/jwt';

// Constants
import { ROUTES, SEARCH_PARAMS_KEY } from '@/constants';

// Utils
import { checkPage } from '@/utils';

export const middleware = async (req: NextRequest, event: NextFetchEvent) => {
  const token: JWT | null = await getToken({
    req,
  });
  const pathname: string = req.nextUrl.pathname;
  const previousPathName: string = checkPage(
    req.nextUrl.searchParams.get(SEARCH_PARAMS_KEY.CALLBACK_URL) ?? '',
  );
  const restrictedPagesAfterSignIn: string[] = [ROUTES.SIGN_IN];
  const authMiddleware = withAuth({
    pages: {
      error: ROUTES.SIGN_IN,
      signIn: ROUTES.SIGN_IN,
    },
  });

  if (restrictedPagesAfterSignIn.includes(pathname) && token) {
    return NextResponse.redirect(`${req.nextUrl.origin}${previousPathName}`);
  }

  return authMiddleware(Object.assign(req, { nextauth: { token } }), event);
};

export const config: MiddlewareConfig = {
  matcher: '/((?!api|_next/static|_next/image|images|.swa/health).*)',
};
