"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [navColor, setNavColor] = useState<boolean>(false);
  const changeNavColor = () => {
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <>
    <header className="text-white sm:bg-black md:bg-black lg:bg-black xl:fixed 2xl:fixed z-10 w-full">
      <div
        className={`w-full h-[80px] xl:h-[120px] 2xl:h-[150px] flex items-center justify-between  xl:menu-bg-xl 2xl:menu-bg-2xl ${
          navColor ? "bg-black" : "backdrop-blur-[7px] bg-black bg-opacity-50"
        }`}
      >
        <div className="logo w-[20%] h-full  p-1">
          <Link
            href={"/"}
            className="h-full w-full flex items-center justify-center"
          >
            <img
              alt="Wuhan Lab"
              src={"/assets/images/logo.png"}
              className="w-[90%] md:w-[70%] lg:w-[100px] xl:w-[50%] 2xl:w-[50%]"
            />
          </Link>
        </div>
        <div className="w-[80%] h-full flex items-center justify-between px-[10%] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] tracking-[1px] xl:tracking-[5px] 2xl:tracking-[5px]">
          <div></div>
          <div className="h-full xl:h-[95%] 2xl:h-[95%] flex xl:flex-col 2xl:flex-col items-center">
            <Link
              href={"#"}
              className="flex flex-col items-center justify-center"
            >
              <img
                alt="Order-barcode"
                src={"/assets/images/Order-barcode.png"}
                className="hidden xl:block 2xl:block xl:w-[50%] 2xl:w-[75%]"
              />
            </Link>
            <p className="text-center">ORDER</p>
          </div>
          <div className="h-full xl:h-[95%] 2xl:h-[95%] flex xl:flex-col 2xl:flex-col items-center  " onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
            <Link
              href={"/onlyfans"}
              className="flex flex-col items-center justify-center"
            >
              <img
                alt="onlyfans-barcode"
                src={"/assets/images/onlyfans-barcode.png"}
                className="hidden xl:block 2xl:block xl:w-[50%] 2xl:w-[75%]"
              />
            </Link>
            <p className="text-center">ONLYFANS</p>
          </div>
        </div>
      </div>
    </header>
    <div className={`${hover ? "absolute right-[5%] top-[120px]" : "hidden"}`}>
              <div className="flex items-center justify-center ">
                <img alt="Boy" src={"/assets/images/boy.png"} />
                <img alt="Pirate" src={"/assets/images/pirate.png"} />
              </div>
            </div>
    </>
  );
};

export default Header;
