'use client'

import Image from "next/image";
import { Carousel } from "./components/Carousel";
import InfoCard from "./components/InfoCard";
import NewsLetter from "./components/NewsLetter";
import Subscribe from "./components/Subscribe";

import { motion } from 'framer-motion'
import SwiperCarousel from "./components/SwiperCarousel";

import styles from './page.module.css'
import Icons from "./components/Icons";
import NewArrival from "./components/NewArrival";

const pens = [
  {
    title: 'Pen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/pen-info.png',
      '/images/pen-info-left.png'
    ]
  },
  {
    title: 'Pen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/pen-info.png',
      '/images/pen-info-left.png'
    ]
  },
  {
    title: 'Pen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/pen-info.png',
      '/images/pen-info-left.png'
    ]
  }
]

const edibles = [
  {
    title: 'Edibles',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/edibles.png',
      '/images/edibles-left.png'
    ]
  },
  {
    title: 'Edibles',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/edibles.png',
      '/images/edibles-left.png'
    ]
  },
  {
    title: 'Edibles',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/edibles.png',
      '/images/edibles-left.png'
    ]
  }
]

export default function Home() {
  return (
    <main>
        <div className="hidden 2xl:flex gap-4 p-4 bg-[#f5f5f5] w-[100%]">
         <div className="h-96 w-1/4">
          <img className="h-full w-full object-cover object-center" src="images/BD-FireDeals_Mobile.png" alt="" />
         </div>
         <div className="h-96 flex-2">
          <img className="h-full w-full object-cover" src="images/BD-E-Torch-x-Dozo-B2SH_Desktop-Banner.png" alt="" />
         </div>
         <div className="h-96 w-1/4">
          <img className="h-full w-full object-cover object-center" src="images/BD-FireDeals_Mobile.png" alt="" />
         </div>
        </div>
        {
          <div className="flex gap-4 p-4 2xl:hidden bg-[#f5f5f5] w-[100%] flex-col">
            <div className="w-full">
              <img className="h-full w-full object-cover" src="images/BD-E-Torch-x-Dozo-B2SH_Desktop-Banner.png" alt="" />
            </div>
            <div className="flex gap-4">
                <div className="w-full">
                  <img className="object-contain" src="images/BD-FireDeals_Mobile.png" alt="" />
                </div>
                <div className="w-full">
                  <img className="object-contain" src="images/BD-FireDeals_Mobile.png" alt="" />
                </div>
            </div>
          </div>
        }
        
        <Icons />

        <NewArrival />

      <Subscribe />
    </main>
  );
}
