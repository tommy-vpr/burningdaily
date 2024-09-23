import React from 'react'

import {
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaBars,
    FaUser,
    FaSearch
} from 'react-icons/fa'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import SwiperCarousel from './SwiperCarousel'
  
const Header = () => {
  return (
    <header className='sticky top-0 bg-white z-10'>
        <div className='flex justify-between items-center mx-auto py-2 px-4'>
            <Link href='https://burningdaily.com/'>
                <img className='w-[80px] lg:w-[115px]' src="images/MainBD-Logo.png" alt="" />
            </Link>
            
            <div className='hidden w-2/3 md:flex'>
                <SwiperCarousel />
            </div>

            <div className='flex items-center gap-2 text-[#101010]'>
                {/* <Link href='https://burningdaily.com/'>
                    <FaSearch />
                </Link>
                <Link href='https://burningdaily.com/'>
                    <FaUser />
                </Link> */}
                <Sheet>
                <SheetTrigger>
                    <FaBars className='text-[#101010] cursor-pointer text-xl' />
                </SheetTrigger>
                <SheetContent className='bg-white'>
                    <SheetHeader>
                    <SheetDescription>
                        <ul className='flex flex-col gap-2 mt-12 text-left text-xl'>
                            <Link href='https://burningdaily.com/collections/delta-8-disposables' className='hover:text-gray-500 p-2 transition 
                            duration-200'>
                                <li>Disposables</li>
                            </Link>
                            <Link href='https://burningdaily.com/collections/delta-8-edibles' className='hover:text-gray-500 p-2 transition 
                            duration-200'>
                                <li>Edibles</li>
                            </Link>
                            <Link href='https://burningdaily.com/collections/pets/' className='hover:text-gray-500 p-2 transition 
                            duration-200'>
                                <li>Pets</li>
                            </Link>
                            <Link href='https://burningdaily.com/collections/discount' className='hover:text-gray-500 p-2 transition 
                            duration-200'>
                                <li>Deals</li>
                            </Link>
                        </ul>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>
        </div>
    </header>
  )
}

export default Header
