import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './navigation';

export default createMiddleware({
  defaultLocale: 'en',
  locales: locales,
  localePrefix,
  pathnames,
});

export const config = {
  matcher: ['/', '/(sr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
