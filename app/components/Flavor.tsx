import React from 'react'
import FlavorCard from './FlavorCard'

const flavors = [
    {
        title: 'Vapes',
        desc: 'Experience a cleaner, customizable alternative to smoking with our sleek, easy-to-use vapes. Enjoy a variety of flavors and nicotine levels to suit your taste and lifestyle.',
        image: 'images/rarebanner_469x375_1.webp',
        url: 'https://burningdaily.com/collections/delta-8-disposables'
    },
    {
        title: 'Pre-Rolls',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, quae numquam quasi deserunt vel magnam temporibus! Quas illo soluta',
        image: 'images/pre-rolls.webp',
        url: 'https://burningdaily.com/collections/thc-a-prerolls'
    },
    {
        title: 'Edibles',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, quae numquam quasi deserunt vel',
        image: 'images/BDgreenhouse27_469x375_1.webp',
        url: 'https://burningdaily.com/collections/delta-9-edibles'
    }
]

const Flavor = () => {
  return (
    <div className="mt-12 px-8 max-w-[1200px] m-auto">
      <div className="flex gap-4 items-center mb-4">
        <span className="h-[1px] w-full bg-[#cecece]"></span>
        <h3 className="text-3xl font-bold text-center text-nowrap	">
          Products
        </h3>
        <span className="h-[1px] w-full bg-[#cecece]"></span>
      </div>
      <div className='flex flex-col sm:flex-row justify-center gap-8 mt-12'>
        {flavors.map(flavor => (
            <FlavorCard 
              key={flavor.title}
              title={flavor.title} 
              image={flavor.image} 
              desc={flavor.desc} 
              url={flavor.url}
              />
        ))}
      </div>
    </div>
  )
}

export default Flavor
