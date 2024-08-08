'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { FaTruck, FaFire, FaTag } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from 'next/link';
// Import Swiper styles

type Props = {
  isMobile?: boolean
}

export default ({ isMobile }: Props) => {
  console.log(isMobile)
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      speed={500}
      loop
      className={`${isMobile ? 'bg-[#327739]' : ''} swiper-container`}>
      <SwiperSlide className={`${isMobile ? 'p-4' : 'mt-4'}`}>
        <div className="text-center flex justify-center items-center gap-2 text-[#666]">
          <FaTruck className={`${isMobile ? 'text-md text-[orangered]' : 'text-xl text-[orangered]'}`} />
          <p className={`${isMobile ? 'text-white text-sm' : 'text-[#333'}`}>Free shipping on all U.S orders $50+</p>
          <Link
            href='https://burningdaily.com/'
            className={`${isMobile ? 'px-2 py-[2px]' : 'px-4 py-[4px]'} rounded-full text-xs ${isMobile ? 'bg-[#101010]' : 'bg-[#327739]'} text-white`}>
            Shop Now
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${isMobile ? 'p-4' : 'mt-4'}`}>
        <div className="text-center flex justify-center items-center gap-2 text-[#666]">
          <FaTag className={`${isMobile ? 'text-md text-[orangered]' : 'text-xl text-[orangered]'}`} />
          <p className={`${isMobile ? 'text-white text-sm' : 'text-[#333'}`}>Get 15% off your first purchase</p>
          <Link
            href='https://burningdaily.com/'
            className={`${isMobile ? 'px-2 py-[2px]' : 'px-4 py-[4px]'} rounded-full text-xs ${isMobile ? 'bg-[#101010]' : 'bg-[#327739]'} text-white`}>
            Claim Now
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
