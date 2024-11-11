// app/layout.tsx
import type {Metadata} from 'next';
import {Manrope, Open_Sans, Work_Sans} from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${manrope.variable} ${openSans.variable} ${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
