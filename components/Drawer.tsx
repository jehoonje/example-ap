"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/store/menuStore";
import Link from "next/link";

export function Drawer() {
  const { isOpen, closeMenu } = useMenuStore();

  // Drawer가 열리면 어두운 반투명 백그라운드(#fafafa의 반투명)를 깔아줌
  // Drawer 자체는 오른쪽에서 슬라이드

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경(오버레이) */}
          <motion.div
            key="drawer-bg"
            className="fixed inset-0 bg-[#fafafa]/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu} // 배경 클릭 시 닫기
          />

          {/* Drawer 본체 */}
          <motion.div
            key="drawer-menu"
            className="fixed top-0 left-0 bottom-0 w-3/4 bg-[#333] z-50 flex flex-col p-4"
            initial={{ opacity: 0 }} // 처음에는 투명
            animate={{ opacity: 1 }} // 점점 선명하게 나타남 (페이드인)
            exit={{ opacity: 0, x: "100%" }} // 오른쪽으로 나가면서 투명해짐
            transition={{ duration: 0.3, ease: "easeInOut" }} // 부드러운 애니메이션
          >
            <nav className="mt-8 mr-8 space-y-4 text-right">
              {/* 카테고리: about, actor, musician, model, arthor */}
              <Link
                href="/about"
                onClick={closeMenu}
                className="block text-lg font-medium"
              >
                About
              </Link>
              <Link
                href="/actor"
                onClick={closeMenu}
                className="block text-lg font-medium"
              >
                Actor
              </Link>
              <Link
                href="/musician"
                onClick={closeMenu}
                className="block text-lg font-medium"
              >
                Musician
              </Link>
              <Link
                href="/model"
                onClick={closeMenu}
                className="block text-lg font-medium"
              >
                Model
              </Link>
              <Link
                href="/arthor"
                onClick={closeMenu}
                className="block text-lg font-medium"
              >
                Arthor
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
