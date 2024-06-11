import { Poppins, Source_Serif_4 } from 'next/font/google';
import '../globals.scss';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ViewTransitions } from 'next-view-transitions';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { useTranslations } from 'next-intl';
import { locales } from '../../navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

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
  title: 'BeeHive Creative Agency',
  description: 'BeeHive - Creative Agency from Belgrade, Serbia',
};

// export async function generateMetadata({ params: { locale } }) {
//   const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

//   return {
//     title: t('title'),
//   };
// }

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('layout');

  const routes = [
    { href: '/', label: t('nav.home') },
    { href: '/about-us', label: t('nav.aboutUs') },
    { href: '/our-work', label: t('nav.projects') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const headerMessages = {
    locales: {
      en: t('localeSwitcher.en'),
      sr: t('localeSwitcher.sr'),
    },
    socialsTitle: t('socialsTitle'),
    lang: t('lang'),
  };

  return (
    <ViewTransitions>
      <html lang={locale}>
        <body className={`${poppins.variable} ${sourceSerif4.variable}`}>
          <NextIntlClientProvider>
            <Header routes={routes} messages={headerMessages} />
            {children}
            <Footer routes={routes} message={t('socialsTitle')} />
            <SpeedInsights />
            <Analytics />
          </NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}