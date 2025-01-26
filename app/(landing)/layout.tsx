'use client';

import { Inter } from 'next/font/google';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });
  return (
    <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:text-clip">
      <Header />

      <main className="grow">{children}</main>

      <Footer border={true} />
    </div>
  );
}
