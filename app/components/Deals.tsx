import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import styles from './arrival.module.css';

import { FaArrowRight } from 'react-icons/fa';

import { arrivals, deals } from '@/data';
import Link from 'next/link';

const Deals = () => {
  return (
    <div className="px-8 mt-16">
      <div className="flex gap-4 items-center mb-4">
        <span className="h-[1px] w-full bg-[#cecece]"></span>
        <h3 className="text-3xl font-bold text-center text-nowrap	">
          New Arrivals
        </h3>
        <span className="h-[1px] w-full bg-[#cecece]"></span>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={4}
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
        navigation
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }}
        // pagination={{ clickable: true }}
        pagination
        className='p-8'>
        {deals.map((item) => (
          <SwiperSlide className=" text-[#666] h-full pb-10">
            {/* <img src={item.image} alt="" /> */}
            <div className='h-2/3 flex flex-col justify-between'>
            <Link href='https://burningdaily.com/'>
              <img src={item.image} alt="burning daily" />
            </Link>
              <div className='h-[100px]'>
                <p className="text-left text-[#327739]">${item.price}</p>
                <p className="text-sm xl:text- text-left">{item.title}</p>
              </div>
              <div className='py-1'>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">

                <Link href='https://burningdaily.com/' className="rounded bg-[#327739] hover:bg-[#3e9446] text-white 
                transition duration-150 text-md p-2 w-full flex justify-center items-center">
                  Add to cart
                </Link>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Deals;
