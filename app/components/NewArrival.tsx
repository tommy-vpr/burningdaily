import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import styles from './arrival.module.css'

import { FaArrowRight} from 'react-icons/fa'

import { arrivals } from '@/data'

const NewArrival = () => {
  return (
    <div className='px-8'>
      <div className='flex gap-4 items-center mb-4'>
        <span className='h-[1px] w-full bg-[#cecece]'></span>
        <h3 className='text-3xl font-bold text-center text-nowrap	'>New Arrivals</h3>
        <span className='h-[1px] w-full bg-[#cecece]'></span>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={4}
        spaceBetween={80}
        autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
            }}
        loop
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        pagination={{ clickable: true }}
        className={`h-[500px] p-4`}
        >
            {
                arrivals.map(item => (
                    <SwiperSlide className='text-center flex justify-center flex-col items-center gap-2 text-[#666]'>
                        <img src={item.image} alt="" />
                        <p className='text-left text-[#327739]'>${item.price}</p>
                        <p className='text-sm text-left'>{item.title}</p>
                        <div className='flex gap-4 justify-center mt-8'>
                            <button className='rounded outline outline-[1px] outline-gray-300 w-full'>Quick View</button>
                            <button className='rounded bg-[#327739] text-white text-md p-2 w-full'>Add to cart</button>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default NewArrival
