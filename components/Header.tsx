'use client';

import React from 'react';
import Link from 'next/link';
import { HamburgerButton } from './HamburgerButton';
import { Drawer } from './Drawer';

export function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-4 bg-[#333] text-[#fafafa]">
      {/* 왼쪽 타이틀 클릭 시 메인화면으로 돌아오도록 Link */}
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">
          Artist Portfolio
        </h1>
      </Link>
      
      {/* 오른쪽 햄버거 버튼 (X로 전환되는 애니메이션) */}
      <HamburgerButton />
      
      {/* Drawer (햄버거 버튼 클릭 시 등장) */}
      <Drawer />
    </header>
  );
}
