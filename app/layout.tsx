import './globals.css';
import React from 'react';
import { Header } from '@/components/Header';
// import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Artist Portfolio',
  description: 'Artist portfolio site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        {/* 헤더 */}
        <Header />
        
        {/* 메인 컨텐츠 */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* 푸터 */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
