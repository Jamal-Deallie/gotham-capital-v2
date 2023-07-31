import './globals.scss';
import type { Metadata } from 'next';
import RouterMounting from '@/components/RouterMounting';
import Layout from '@/components/Layout';
import { Inter } from 'next/font/google';

const inter_heading = Inter({
  weight: ['600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--heading-font',
  display: 'swap',
});

const inter_body = Inter({
  weight: ['100', '200', '300', '400', '500'],
  subsets: ['latin'],
  variable: '--body-font',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gotham Capital',
  description:
    'Gotham Capital: Your expert investment partner for tailored strategies, exceptional returns, and a brighter financial future.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter_body.variable} ${inter_heading.variable}`}>
      <body>
        <RouterMounting>
          <Layout>{children}</Layout>
        </RouterMounting>
      </body>
    </html>
  );
}
