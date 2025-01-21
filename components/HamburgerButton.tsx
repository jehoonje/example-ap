'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMenuStore } from '@/store/menuStore';

export function HamburgerButton() {
  const { isOpen, toggleMenu } = useMenuStore();

  return (
    <button
      onClick={toggleMenu}
      className="relative w-8 h-8 flex items-center justify-center bg-transparent rounded-full"
      aria-label="Toggle menu"
    >
      {/* 햄버거 라인 */}
      <motion.span
        className="absolute w-8 h-0.5 bg-white rounded"
        initial={{ y: -10, rotate: 0 }}
        animate={{
          y: isOpen ? 0 : -10,
          rotate: isOpen ? -45 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }} // 변환 속도 조절
      />
      <motion.span
        className="absolute w-8 h-0.5 bg-white rounded"
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isOpen ? 0 : 1,
          scale: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }} // 빠르게 사라지도록 조정
      />
      <motion.span
        className="absolute w-8 h-0.5 bg-white rounded"
        initial={{ y: 10, rotate: 0 }}
        animate={{
          y: isOpen ? 0 : 10,
          rotate: isOpen ? 45 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }} // 변환 속도 조절
      />
    </button>
  );
}
