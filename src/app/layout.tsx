'use client';

import { AuthProvider } from '@/lib/auth-context';
import { ThemeProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import './globals.css';
import './theme.css';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Suspense } from 'react';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
            <AuthProvider>
              <Suspense>
                <NuqsAdapter>
                  <NextTopLoader />
                  {children}
                  <Toaster richColors />
                </NuqsAdapter>
              </Suspense>
            </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
