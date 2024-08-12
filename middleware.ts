import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
    locales : ["ar", "en"],
    localePrefix : 'always',
    defaultLocale: 'ar',
    localeDetection:false
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
};



