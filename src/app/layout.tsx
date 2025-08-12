import { siteConfig } from '@/config/site';

import type { Metadata } from 'next';

import { fontSans, fontSerif } from '@/lib/fonts';

import { SiteHeader } from '@/components/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.title}`,
    template: `%s | ${siteConfig.title}`,
  },
  description: `${siteConfig.description}`,
  authors: [
    {
      name: `${siteConfig.author}`,
      url: `${siteConfig.url}`,
    },
  ],
  keywords: siteConfig.keywords,
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontSans.className} antialiased`}
      >
        <SiteHeader />
        <main>{children}</main>
        <TailwindIndicator />
      </body>
    </html>
  );
}
