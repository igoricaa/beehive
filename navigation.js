import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'sr'];
export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/o-nama': {
    en: '/about-us',
    sr: '/o-nama',
  },
  '/kontakt': {
    en: '/contact',
    sr: '/kontakt',
  },
  '/nasi-radovi': {
    en: '/our-work',
    sr: '/nasi-radovi',
  },
  // '/nasi-radovi/[...projectSlug]': {
  //   en: '/our-work/[...projectSlug]',
  //   sr: '/nasi-radovi/[...projectSlug]',
  // },
  '/nasi-radovi/prana': {
    en: '/our-work/prana',
    sr: '/nasi-radovi/prana',
  },
  '/nasi-radovi/roger-directors': {
    en: '/our-work/roger-directors',
    sr: '/nasi-radovi/roger-directors',
  },
  '/nasi-radovi/bistro-grad': {
    en: '/our-work/bistro-grad',
    sr: '/nasi-radovi/bistro-grad',
  },
  // '/nasi-radovi/la-canntina': {
  //   en: '/our-work/la-canntina',
  //   sr: '/nasi-radovi/la-canntina',
  // },
  '/nasi-radovi/zla-zla': {
    en: '/our-work/zla-zla',
    sr: '/nasi-radovi/zla-zla',
  },
  '[...rest]': '[...rest]',
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
