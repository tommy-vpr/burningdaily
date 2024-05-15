import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'

const Subscribe = () => {
  return (
    <div className="mx-auto mt-48 w-full relative">
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
        z-10 flex justify-center items-center bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 
        w-2/3 md:max-w-xl p-8 mx-auto rounded-xl flex-col gap-4'>
            <p className='text-gray-800 font-normal'>
            New <span className='font-bold'>Heights</span>, New <span className='font-bold'>Experiences</span>, Now Available.
            Live a little with our high-quality products!
            </p>
            
            <Link href='' className='px-6 py-2 bg-white rounded hover:bg-gray-100
            transition duration-200 ease'>
                Learn More
            </Link>
        </motion.div>
    

    <div
        className="relative isolate overflow-hidden bg-[#101010] px-6 py-24 shadow-2xl ">
       
        <motion.h2
        initial={{
            y: 100,
            opacity: 0
        }} 
        viewport={{once: true}}
        whileInView={{
            y: 0,
            opacity: 1,
            transition: {
                duration: .4
            }
        }}
        className="mx-auto max-w-2xl text-center text-3xl font-bold 
        tracking-tight text-white mt-12">
        Subscribe to our latest news and updates
        </motion.h2>
        <motion.form 
        initial={{
            y: 100,
            opacity: 0
        }} 
        viewport={{once: true}}
        whileInView={{
            y: 0,
            opacity: 1,
            transition: {
                duration: .4
            }
        }}
        className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email"  
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm sm:text-sm sm:leading-6" placeholder="Enter your email" />

            <button type="submit" className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
        </motion.form>

        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7">
            </circle>
            <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                    gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                    <stop stop-color="#3c17c8"></stop>
                    <stop offset="1" stop-color="#7ED321" stop-opacity="0"></stop>
                </radialGradient>
            </defs>
        </svg>

    </div>
</div>
  )
}

export default Subscribe
