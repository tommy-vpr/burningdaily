'use client'

import Image from "next/image";
import { Carousel } from "./components/Carousel";
import InfoCard from "./components/InfoCard";
import NewsLetter from "./components/NewsLetter";
import Subscribe from "./components/Subscribe";

import { motion } from 'framer-motion'

const pens = [
  {
    title: 'Pen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/pen-info.png',
      '/images/pen-info-left.png'
    ]
  },
  {
    title: 'Pen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/pen-info.png',
      '/images/pen-info-left.png'
    ]
  },
  {
    title: 'Pen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/pen-info.png',
      '/images/pen-info-left.png'
    ]
  }
]

const edibles = [
  {
    title: 'Edibles',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/edibles.png',
      '/images/edibles-left.png'
    ]
  },
  {
    title: 'Edibles',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/edibles.png',
      '/images/edibles-left.png'
    ]
  },
  {
    title: 'Edibles',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam ipsam modi dolorum ipsa similique vero numquam fuga perspiciatis eius officiis ratione blanditiis autem vel.',
    imageUrl: [
      '/images/edibles.png',
      '/images/edibles-left.png'
    ]
  }
]

export default function Home() {
  return (
    <main>
      <Carousel />

      <section className="px-4 md:px-0 md:max-w-5xl border-t-[1px] border-gray-100 mx-auto mt-16 py-4 pt-12">
        <motion.div 
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
          className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pens.map((pen, i) => {
            return (
              <InfoCard key={i} item={pen} />
            )
          })}
        </motion.div>

        <motion.div
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
        className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {edibles.map((edible, i) => {
            return (
              <InfoCard key={i} item={edible} />
            )
          })}
        </motion.div>
      </section>

      <Subscribe />

      {/* <section className="w-full bg-[#101010] flex justify-center items-center py-12">
          
      </section> */}
    </main>
  );
}
