import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import styles from "./arrival.module.css";

import { FaArrowRight } from "react-icons/fa";

import { arrivals } from "@/data";
import Link from "next/link";

const NewArrival = () => {
  return (
    <div className="mt-4 xl:mt-0 px-8 max-w-[1400px] m-auto">
      <div className="flex gap-4 items-center mb-4">
        <span className="h-[1px] w-full bg-[#cecece]"></span>
        <h3 className="text-3xl font-bold text-center text-nowrap	">
          New Arrivals
        </h3>
        <span className="h-[1px] w-full bg-[#cecece]"></span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {arrivals.map((item) => (
          <div
            key={item.title}
            className="text-[#666] h-full pb-10 flex flex-col"
          >
            <Link href="https://burningdaily.com/collections/new-arrivals">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain w-full h-54 rounded-lg hover:scale-105 transition duration-300"
              />
            </Link>
            <div className="flex-grow flex flex-col justify-between h-[100px]">
              <div className="mt-2">
                <p className="text-left text-[#327739] text-lg">
                  ${item.price}
                </p>
                <p className="text-sm text-left">{item.title}</p>
              </div>
              <div className="py-1"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
