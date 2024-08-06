'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { FaTruck, FaFire, FaTag } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from 'next/link';
// Import Swiper styles

export default () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      loop
      className="swiper-container">
      <SwiperSlide className="mt-4">
        <div className="text-center flex justify-center items-center gap-2 text-[#666]">
          <FaTruck className="text-xl text-[orangered]" />
          <p>Free Shipping $50+</p>
          <Link
            href="/"
            className="px-4 py-[4px] rounded-full text-xs bg-[#327739] text-white">
            Shop Now
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mt-4">
        <div className="text-center flex justify-center items-center gap-2 text-[#666]">
          <FaTruck className="text-xl text-[orangered]" />
          <p>Get 20% off your first purchase</p>
          <Link
            href="/"
            className="px-4 py-[4px] rounded-full text-xs bg-[#327739] text-white">
            Claim Now
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
