import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['ar', 'en'] as const;
  export const localePrefix = 'always'; // Default
   
  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
    '/': '/',
    '/blog': '/blog',
    '/ViewJobs': '/Viewjobs/',
   
    // If locales use different paths, you can
    // specify each external path per locale.
    '/about': {
      en: '/about',
      ar: '/about'
    },
    '/loginpage': {
      en: '/loginpage',
      ar: '/loginpage'
    },
    '/ForgetPasswordPage': {
      en: '/ForgetPasswordPage',
      ar: '/ForgetPasswordPage'
    },
   
  
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});