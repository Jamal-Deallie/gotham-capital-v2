import './globals.scss';
import type { Metadata } from 'next';
import RouterMounting from '@/_components/RouterMounting';
import Layout from '@/_components/Layout';
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

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME, SITE_DESCRIPTION } =
  process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  description: {
    default: SITE_DESCRIPTION!,
  },
  robots: {
    follow: true,
    index: true,
  },
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: 'summary_large_image',
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE,
      },
    }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter_body.variable} ${inter_heading.variable}`}>
      <body>
        <RouterMounting>
          <Layout>{children}</Layout>
        </RouterMounting>
      </body>
    </html>
  );
}
