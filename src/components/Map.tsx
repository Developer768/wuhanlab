"use client"
import Image from 'next/image';
import React from 'react'
import { Fade, Flip } from "react-reveal";

const Map = () => {
  return (
    <div className="section-padding">
      <Fade bottom>
        <h2 className="mb-[10px]  font-medium text-[13px] md:text-[18px] lg:text-[24px] xl:text-[40px] 2xl:text-[51px] text-center">
        DO YOU WANT TO EXPERIENCE
        </h2>
      </Fade>
      <Fade bottom>
        <h2 className="mb-[10px]  font-extrabold text-[13px] md:text-[18px] lg:text-[24px] xl:text-[40px] 2xl:text-[51px] text-center">
        WUHAN LAB DELIVERY?
        </h2>
      </Fade>
      <Fade bottom>
        <h2 className="mb-[10px]  font-medium text-[13px] md:text-[18px] lg:text-[24px] xl:text-[40px] 2xl:text-[51px] text-center">
        HERE IS WHERE WE DELIVER TODAY
        </h2>
      </Fade>
      <Flip left>
      <div className='flex justify-center items-center pt-[20px] sm:pt-[20px] md:pt-[20px] lg:pt-[25px] xl:pt-[30px] 2xl:pt-[50px]'>
      <Image src="/assets/images/map.jpg" alt='Map image' width={1165} height={793} />
      </div>
      </Flip>
      </div>
  )
}

export default Map