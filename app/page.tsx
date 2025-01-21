'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// 이미지 배열 생성
const images = Array.from({ length: 10 }, (_, i) => `/images/photo${i + 1}.jpg`);

export default function Home() {
  return (
    <div className="w-full h-auto">
      {/* 자동 슬라이드 Swiper */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[400px] md:h-[600px]"
      >
        {/* 동적으로 이미지 슬라이드 생성 */}
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            >
              <h2 className="text-2xl md:text-4xl">Slide {index + 1}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
