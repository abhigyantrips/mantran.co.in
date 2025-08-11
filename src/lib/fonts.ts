import { Lato, STIX_Two_Text } from 'next/font/google';

export const fontSans = Lato({
  weight: ['400', '700'],
  variable: '--font-sans',
  subsets: ['latin'],
});

export const fontSerif = STIX_Two_Text({
  weight: '400',
  variable: '--font-serif',
  subsets: ['latin'],
});
