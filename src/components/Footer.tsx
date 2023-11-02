import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-full p-4 flex items-center justify-center">
        <Link href={"/"} >
        Terms of Service
        </Link>
    </footer>
  )
}

export default Footer