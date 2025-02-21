import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Fraunces, Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2eae2',
};

export const metadata: Metadata = {
  title: 'Arda Eker - Product preview card component',
  description:
    'This website is a solution for the Product preview card component challenge on Frontend Mentor. It is built with Next.js and Tailwind CSS. Coded by Arda Eker.',
  authors: {
    name: 'Arda Eker',
    url: 'https://github.com/ardaeker',
  },
  keywords: [
    'Frontend Mentor',
    'Product preview card component',
    'Product preview card component solution',
    'Product preview card component challenge',
    'Product preview card component challenge solution',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Arda Eker',
  ],
  metadataBase: new URL(
    'https://product-preview-card-component-ten-sepia.vercel.app/',
  ),
  openGraph: {
    title: 'Arda Eker - Product preview card component',
    description:
      'A fully tested, SEO-optimized product preview card with mobile-friendly design.',
    siteName: 'Frontend Mentor - Product preview card component',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://product-preview-card-component-ten-sepia.vercel.app',
  },
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
      <body
        className={`${fraunces.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
