import Image from 'next/image'
import React from 'react'

import { FaBolt, FaCannabis, FaLaughBeam  } from 'react-icons/fa'

type Props = {
    item: {
        title: string,
        description: string,
        imageUrl: string[]
    }
}

const InfoCard = ({ item: {title, description, imageUrl} }: Props) => {
   console.log(imageUrl)

  return (
    <div className="relative bg-gray-100 md:max-w-xs overflow-hidden rounded-xl
    bg-cover bg-no-repeat flex items-center justify-center flex-col cursor-pointer group">
        <div className='flex items-center justify-center group overflow-hidden'>
            <Image 
                height={100}
                width={200}
                alt=''
                src={imageUrl[0]}
                className='group-hover:scale-105 transition ease duration-200'
            />
            {/* <div className={`bg-[url('/images/${imageUrl[0]}')] group-hover:bg-[url('/images/${imageUrl[0]}')] 
            transition duration-400 ease bg-cover w-48 h-48`}></div> */}
        </div>
        <h3 className='border-[1px] border-gray-500 py-1 w-2/3 text-gray-500 text-center px-8 
        rounded-full'>{title}</h3>
        <div className='my-2 text-xs md:text-sm'>
            {
                title === 'Pen' ? (
                    <div className='flex gap-2 items-center'>
                <FaBolt className='text-blue-500' />
                <p className='text-gray-500'>USB-C Charging</p>
            </div>
                ) : (
                    <div className='flex gap-2 items-center'>
                <FaLaughBeam className='text-blue-500' />
                    <p className='text-gray-500'>Happy Mood</p>
                </div>
                )
            }
            <div className='flex gap-2 items-center'>
                <FaCannabis className='text-gray-500' />
                <p className='text-gray-500'>Long Lasting Flavors</p>
            </div>
            
        </div>
    </div>
  )
}

export default InfoCard
