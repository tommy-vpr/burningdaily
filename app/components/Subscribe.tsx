import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'

import { IoIosPhonePortrait, IoIosMail, IoIosPricetags } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";

const Subscribe = () => {
  return (
    <div className="mx-auto mt-48 w-full relative px-8 bg-[#327739]">
        <motion.div
              initial={{
                y: 20,
                x: '-50%',
                opacity: 0
              }}
              viewport={{once: true}}
              whileInView={{
                y: '-50%',
                x: '-50%',
                opacity: 1,
                transition: {
                  duration: .4
                }
              }}
        className='absolute top-0 -translate-y-[50%] left-1/2 -translate-x-[50%] 
        z-10 flex justify-center items-center bg-gradient-to-r from-[#EF453E] via-[#EF453E
] to-[#f78d2a] text-white drop-shadow-lg
        w-[85%] md:w-1/3 md:max-w-xl p-8 mx-auto rounded-xl flex-col gap-4'>
            <p className='text-lg md:text-xl font-semibold'>
            Get 20% off your first purchase!
            </p>
            <p className='text-white font-normal px-4 py-2 flex gap-2 items-center rounded-[8px] border-[1px]
                group group-hover:bg-white cursor-pointer hover:bg-white transition duration-150'>
                <IoIosPricetags className='group-hover:text-[#EF453E] text-lg' />
                <Link href='https://burningdaily.com/' className='group-hover:text-[#EF453E]'>Claim Now</Link>    
            </p>
            
        </motion.div>
    

    <div
        className="relative isolate overflow-hidden pt-24 ">
       

        <div className='flex justify-center items-center mt-12'>
            <img width={140} src="images/WhiteBD-Logo.png" alt="Burningdaily" />
        </div>
        
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4 mb-8'>
            <p className='font-semibold text-gray-200 '>Contact:</p>
            <a className='flex gap-2 items-center text-gray-200 text-sm' 
                href="https://burningdaily.com/">
                    <IoIosMail className='flex gap-2 items-center text-gray-200 text-lg'/>Areyou@burningdaily.com</a>
            <a className='flex gap-2 items-center text-gray-200 text-sm' 
                href="https://burningdaily.com/">
                    <MdPhoneIphone className='text-lg'/>+1(626)601-9635</a>
        </div>
    </div>
    <div className='text-center text-[#113d15] text-sm p-4 border-t-[1px] border-[#38833f]'>
        &copy;2024 Burningdaily
        </div>
</div>
  )
}

export default Subscribe
