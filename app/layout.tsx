import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { SiteHeader } from '@/components/site-header';

import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'relative flex min-h-screen w-full flex-col bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <SiteHeader />
        <main className="container flex-1">{children}</main>
      </body>
    </html>
  );
}
