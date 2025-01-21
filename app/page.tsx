'use client';

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// 이미지 배열 생성 (photo1.jpeg ~ photo10.jpeg)
const images = Array.from({ length: 10 }, (_, i) => `/images/photo${i + 1}.jpeg`);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-auto">
      {/* 자동 슬라이드 Swiper */}
      <Swiper
        modules={[Autoplay, EffectCoverflow, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        slidesPerView={3}
        loop={true}
        speed={800}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={false}
        breakpoints={{
          1400: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          640: { slidesPerView: 1.5, spaceBetween: 10 },
          0: { slidesPerView: 1.5, spaceBetween: 5 },
        }}
        onImagesReady={() => setIsLoading(false)}
        className={`swiper-container ${isLoading ? "loading" : ""}`}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideInner}>
              <Image
                src={src}
                alt={`Photo ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className={styles.entityImg}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}
