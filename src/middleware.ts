import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { locales } from '@/i18n';

const intlMiddleware = createMiddleware({
  locales: [...locales],
  defaultLocale: 'pt-BR',
  localePrefix: 'always'
});

export async function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const url = request.nextUrl.clone();
  const isAppRoute = url.pathname.includes('/app');

  if (isAppRoute) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      url.pathname = `/${url.pathname.split('/')[1] ?? 'pt-BR'}/login`;
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)']
};
