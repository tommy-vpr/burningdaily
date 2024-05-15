import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import Autoplay from 'embla-carousel-autoplay'

import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import Image from 'next/image'

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true,
    }, [Autoplay({
        delay: 3000
    })])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='embla'>
        <div className="embla__viewport relative max-w-5xl mx-auto h-[500px] md:mt-12" ref={emblaRef}>
            <div className="embla__container h-full">
                <div className="embla__slide flex justify-center items-center relative">
                    <Image 
                        alt='slide 1'
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src='/images/slider-1.jpg'
                        className='object-cover'
                    />
                </div>
                <div className="embla__slide flex justify-center items-center relative">
                    <Image 
                        alt='slide 2'
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src='/images/slider-2.jpg'
                        className='object-cover'
                    />
                </div>
                <div className="embla__slide flex justify-center items-center relative">
                    <Image 
                        alt='slide 3'
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src='/images/slider-3.jpg'
                        className='object-cover'
                    />
                </div>
            </div>

            <button className="embla__prev absolute top-1/2 left-4 text-2xl text-gray-300" onClick={scrollPrev}>
                <FaChevronLeft />
            </button>
            <button className="embla__next absolute top-1/2 right-4 text-2xl text-gray-300" onClick={scrollNext}>
                <FaChevronRight />
            </button>
        </div>
    </div>
  )
}
