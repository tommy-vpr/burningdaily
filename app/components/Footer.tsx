import React from 'react'

import { FaMap, FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex p-12 justify-center items-center bg-[#327739]'>
      <div className='flex justify-center items-center text-gray-100'>
        <ul className='text-sm flex gap-14'>
                <li className='flex gap-2 items-center'>
                    <FaLocationArrow />&nbsp;1355 Darius CtCity of Industry, CA 91745
                </li>
                <li className='flex gap-2 items-center'>
                    <FaPhone className='rotate-90' />&nbsp;626-111-2232
                </li>
                <li className='flex gap-2 items-center'>
                    <FaEnvelope />&nbsp;Vprcollection@gmail.com
                </li>
            </ul>
      </div>
    </footer>
  )
}

export default Footer
