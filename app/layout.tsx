import { siteConfig } from '@/config/site';

import { Metadata } from 'next';

import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  generator: 'Next.js',

  title: {
    default: `${siteConfig.title}`,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  keywords: siteConfig.keywords,

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },

  openGraph: {
    url: siteConfig.url,
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
      },
    ],
  },

  twitter: {
    card: 'summary',
    images: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'relative flex min-h-screen flex-col bg-background font-sans antialiased',
          fontSans.variable
        )}
      ></body>
    </html>
  );
}
