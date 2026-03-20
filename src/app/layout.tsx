import React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import '@/styles/globals.css';
import { SmoothScrollWrapper } from '@/components/SmoothScrollWrapper';

export const metadata: Metadata = {
  title: 'Liquid Glass React Components',
  description: 'Premium glassmorphism components for React 19',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased selection:bg-white/30 bg-[#060010]">
        <SmoothScrollWrapper>
          <main className="min-h-screen py-20 px-4 flex flex-col items-center relative overflow-hidden">
            {children}
          </main>
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
