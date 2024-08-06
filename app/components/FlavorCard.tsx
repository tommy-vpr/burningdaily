import Link from 'next/link'
import React from 'react'

type Props = {
    title: string,
    desc: string,
    image: string
}

const FlavorCard = ({
    title,
    desc,
    image
}: Props) => {
  return (
    <div className="overflow-hidden cursor-pointer rounded-[5px] relative group">
        <Link href='https://burningdaily.com/'>
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 
            ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 
            -bottom-2 text-white flex items-end h-full">
            <div className="h-full w-full flex justify-center items-center space-y-3 text-xl group-hover:opacity-100 
            group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <div className="font-bold text-2xl">{title}</div>
                    </div>
            </div>
                <img className='group-hover:scale-105 transition duration-200 object-cover' alt={title} src={image}/>
        </Link>
    </div>
  )
}

export default FlavorCard
