import { NextResponse } from 'next/server';
import { i18nMiddleware } from 'next-intl';

export function middleware(request) {
    const response = i18nMiddleware(request);
    return response;
}

export const config = {
    matcher: ['/((?!api|_next|static|favicon.ico).*)'],
};