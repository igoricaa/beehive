import { Poppins, Source_Serif_4 } from 'next/font/google';
import './globals.scss';
import { Footer } from '@/components/Footer';
import { ViewTransitions } from 'next-view-transitions';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
  description: 'Official website of BeeHive Creative Agency',
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={`${poppins.variable} ${sourceSerif4.variable}`}>
          {children}
          <Footer />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
