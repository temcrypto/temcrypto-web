import { type Metadata, type Viewport } from 'next';
import { Nunito } from 'next/font/google';

import './globals.css';

const nunito = Nunito({ weight: ['800', '900'], subsets: ['latin'] });

// Set metadata
const SITE_NAME = 'TEMCRYPTO';
const SITE_URL = 'https://temcrypto.com';

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  userScalable: false,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' }, // INFO: tailwindcss color slate-800
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export const metadata: Metadata = {
  title: SITE_NAME,
  description: 'Pay and get paid to Pix using crypto.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary',
    creator: '@TemCryptoApp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${nunito.className}`}>{children}</body>
    </html>
  );
}
