import { Poppins, Source_Serif_4 } from 'next/font/google';
import '../globals.scss';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ViewTransitions } from 'next-view-transitions';
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { locales } from '../../navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import CustomCursor from '@/components/CustomCursor';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif-4',
  weight: ['400'],
  style: ['italic'],
});

export const metadata = {
  metadataBase: new URL('https://bhive.agency'),
  title: {
    default: 'BeeHive Creative Agency',
    template: '%s | BeeHive Creative Agency',
  },
  description: 'BeeHive - Creative Agency from Belgrade, Serbia.',
  openGraph: {
    title: 'BeeHive Creative Agency',
    description: 'BeeHive - Creative Agency from Belgrade, Serbia.',
    url: 'https://bhive.agency',
    siteName: 'BeeHive Creative Agency',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'BeeHive Creative Agency',
    card: 'summary_large_image',
  },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
  // verification: {
  //   google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
  //   yandex: '14d2e73487fa6c71',
  // },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('layout');

  const routes = [
    { href: '/', label: t('nav.home') },
    { href: '/o-nama', label: t('nav.oNama') },
    { href: '/nasi-radovi', label: t('nav.nasiRadovi') },
    { href: '/kontakt', label: t('nav.kontakt') },
  ];

  const headerMessages = {
    locales: {
      en: t('localeSwitcher.en'),
      sr: t('localeSwitcher.sr'),
    },
    socialsTitle: t('socialsTitle'),
    lang: t('lang'),
  };

  const cursorMessages = {
    viewHoverText: t('cursorViewHoverText'),
    dragHoverText: t('cursorDragHoverText'),
  };

  return (
    <ViewTransitions>
      <html lang={locale}>
        <body className={`${poppins.variable} ${sourceSerif4.variable}`}>
          <NextIntlClientProvider>
            <Header routes={routes} messages={headerMessages} />
            {children}
            <Footer routes={routes} message={t('socialsTitle')} />
          </NextIntlClientProvider>
          <CustomCursor messages={cursorMessages} />
        </body>
      </html>
    </ViewTransitions>
  );
}
