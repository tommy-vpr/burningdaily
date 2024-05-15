import React from 'react'

import { FaMap, FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa'

const NewsLetter = () => {
  return (
    <div className='flex w-1/2'>
      <div className='w-1/2 p-8'>
        <p className='text-gray-200 mb-4 font-bold text-lg'>Contact Us</p>
        <p className='text-gray-200 mb-4 text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi perferendis dicta autem. Cum itaque.</p>
        <ul className='text-gray-200 font-light text-sm flex flex-col gap-2'>
            <li className='flex items-center gap-2'><FaLocationArrow />&nbsp;626-320-4800</li>
            <li className='flex items-center gap-2'><FaPhone className='rotate-90' />&nbsp;Vprcollection@gmail.com</li>
            <li className='flex items-start gap-2'><FaEnvelope className='' />&nbsp;1355 Darius Ct, City of Industry, CA 91745
            </li>
        </ul>
      </div>
      <div className='bg-gray-200 w-1/2 rounded-xl'>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
