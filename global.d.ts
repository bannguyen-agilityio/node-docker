import { NextRequestWithAuth } from 'next-auth/middleware';

declare module 'next/server' {
  interface NextRequest {
    nextauth: NextRequestWithAuth['nextauth'];
  }
}
