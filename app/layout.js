import { Poppins } from 'next/font/google';
import './globals.scss';
import { Footer } from '@/components/Footer';
import { ViewTransitions } from 'next-view-transitions';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'BeeHive Creative Agency',
  description: 'Official website of BeeHive Creative Agency',
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={poppins.className}>
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
