'use client';

import Subscribe from './components/Subscribe';


import Icons from './components/Icons';
import NewArrival from './components/NewArrival';
import Flavor from './components/Flavor';
import Deals from './components/Deals';
import Link from 'next/link';

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      <div className="hidden 2xl:flex gap-4 p-4 bg-[#f5f5f5] w-[100%]">
        <div className="h-[420px] xl:h-[440px] w-1/4">
          <Link href='https://burningdaily.com/'>
            <img
              className=" w-full h-full object-cover object-center lg:object-left-bottom"
              src="images/BD-FireDeals_Mobile.png"
              alt=""
            />
          </Link>
        </div>
        <div className="h-[420px] xl:h-[440px] flex-2">
        <Link href='https://burningdaily.com/'>
          <img
            className="h-full w-full object-cover"
            src="images/BD-EightySix_Web_Banner.png"
            alt=""
          />
        </Link>
        </div>
        <div className="h-[420px] xl:h-[440px] w-1/4">
          <Link href='https://burningdaily.com/'>
            <img
              className=" w-full h-full object-cover object-center lg:object-left-bottom"
              src="images/BD-E-07-02-24-Chapo-Mobile-Compressed.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
      {
        <div className="flex gap-4 p-4 2xl:hidden bg-[#f5f5f5] w-[100%] flex-col">
          <div className="w-full">
          <Link href='https://burningdaily.com/'>
            <img
              className="h-full w-full object-cover"
              src="images/BD-EightySix_Web_Banner.png"
              alt=""
            />
          </Link>
            
          </div>
          <div className="flex gap-4">
            <div className="w-full">
            <Link href='https://burningdaily.com/'>
              <img
                className="object-contain"
                src="images/BD-FireDeals_Mobile.png"
                alt=""
              />
            </Link>
            </div>
            <div className="w-full">
            <Link href='https://burningdaily.com/'>
              <img
                className="object-contain"
                src="images/BD-E-07-02-24-Chapo-Mobile-Compressed.jpg"
                alt=""
              />
            </Link>
            </div>
          </div>
        </div>
      }

      <Icons />

      <motion.div
        initial={{ y: 200, opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        <NewArrival />
      </motion.div>

      <motion.div
        initial={{ y: 200, opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        <Flavor />
      </motion.div>
      
      <motion.div
        initial={{ y: 200, opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        <Deals />
      </motion.div>

      <Subscribe />
    </main>
  );
}
