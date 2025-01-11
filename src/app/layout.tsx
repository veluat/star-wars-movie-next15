import React from 'react'
import type { Metadata } from "next";
import {CustomHeader} from '@/components/CustomHeader'
import {CustomFooter} from '@/components/CustomFooter'
import "./globals.css";

export const metadata: Metadata = {
  title: "Star Wars Films",
  description: "Star Wars films",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <CustomHeader/>
      <main className={'main'}>
        {children}
      </main>
      <CustomFooter/>
      </body>
    </html>
  );
}
