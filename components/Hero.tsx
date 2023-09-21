"use client"

import React from 'react'
import { CustomButton } from '.';
import Image from "next/image"

const Hero = () => {
  const handleScroll = () => { }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find, book, or rent a car - quickly and easily</h1>
        <p className='hero_subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas vero unde vel ipsam. Fugiat.</p>
        <CustomButton
          btnType='button'
          containerStyle='bg-primary-blue text-white rounded-full mt-10'
          title='Explore Cars' />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png" alt='hero' className='object-contain' fill />
        </div>
        <div className='hero__image-overlay'></div>
      </div>
    </div>
  )
}

export default Hero;
