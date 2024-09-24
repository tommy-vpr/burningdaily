import React from 'react'

import { icons } from '@/data'

const Icons = () => {
  return (
    <div className='flex flex-col gap-2 md:gap-0 md:flex-row justify-between p-4 md:p-16 text-center '>
        {icons.map(icon => (<div className='rounded-[5px] w-full md:1/3 flex flex-row md:flex-col items-center 
         p-4 md:p-0 justify-start md:justify-center text-[#333] bg-[#f5f5f5] md:bg-white'
          key={icon.title}>
            <div className='text-[28px] xl:text-[42px] mr-4 md:mr-0'>{icon.icon}</div>
            <div className='text-left md:text-center'>
              <h3 className='font-bold'>{icon.title}</h3>
              <p className='text-sm'>{icon.dec}</p>
            </div>
        </div>))}
    </div>
  )
}

export default Icons
