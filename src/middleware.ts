import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware(routing);

  const response = handleI18nRouting(request);

  response.headers.set('x-default-locale', routing.defaultLocale);

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};
