import React from 'react'

import { icons } from '@/data'

const Icons = () => {
  return (
    <div className='flex justify-between p-16'>
        {icons.map(icon => (<div className='w-full flex flex-col items-center justify-center text-[#333]'>
            <div className='text-[42px]'>{icon.icon}</div>
            <h3 className='font-bold'>{icon.title}</h3>
            <p className='text-sm'>{icon.dec}</p>
        </div>))}
    </div>
  )
}

export default Icons
