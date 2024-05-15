"use client";

import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Link from "next/link";

import "./menu.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { FaBars, FaTimes } from 'react-icons/fa'

import { motion, AnimatePresence } from 'framer-motion'

const menuLinks = [
  { path: "https://itslitto.com/", label: "20%" },
  { path: "https://itslitto.com/", label: "OFF" },
];

const Coupon = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<GSAPTimeline>(
    gsap.timeline({
      defaults: {
        ease: 'back.out',
      },
    })
  )
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      {/* menu-bar */}
      <div className="menu-bar">
        <div className="cursor-pointer md:animate-bounce menu-open absolute top-0 left-0 md:left-24 shadow-md" onClick={toggleMenu}>
          <div className="md:pt-4 w-full h-full text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium 
          rounded-lg text-sm px-5 py-2.5 text-center me-2 flex flex-col justify-center items-center">
              <div className="font-bold text-lg md:text-xl leading-none md:flex-col">
                <span>20%</span><span className="font-light">OFF</span>
              </div>
          </div>
        </div>
      </div>

      {/* menu-overlay */}
      <div className="menu-overlay bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500">
        {/* menu-overlay-bar */}
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/" className="text-2xl">LIV A LITTO</Link>
          </div>
          <div className="menu-close">
            <FaTimes className="cursor-pointer text-gray-900 text-2xl
            hover:text-gray-800 transition duration-200" onClick={toggleMenu} />
          </div>
        </div>

        {/* menu overlay items */}

        <div className="menu-copy -mt-28 flex justify-center items-center">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>

                  <div className="menu-link text-[10em] leading-[85%]">
                    {link.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <AnimatePresence>
              <motion.p
                  key='20%'
                  initial={{
                    y: 20,
                    opacity: 0
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: .2
                    }
                  }}
                  exit={{
                    y: 20,
                    opacity: 0
                  }}
                >Take 20% off your first purchase
                </motion.p>
                <motion.div
                  key='shopBTN'
                  initial={{
                    opacity: 0
                  }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      delay: .4
                    }
                  }}
                  exit={{
                    opacity: 0
                  }}
                  className="px-8 py-2 bg-[#101010] rounded-xl text-white
                  hover:bg-gray-800 transition duration-200 cursor-pointer"
                >
                  <Link href='https://itslitto.com/'>
                    Shop Now!
                  </Link>
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
