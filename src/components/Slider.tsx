"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Fade from "react-reveal/Fade";

const Slider = () => {
  return (
    <div className="section-padding">
      <Fade bottom>
        <h2 className="mb-[20px] lg:mb-[50px] xl:mb-[80px] 2xl:mb-[100px] font-medium text-[13px] md:text-[18px] lg:text-[24px] xl:text-[40px] 2xl:text-[51px] text-center">
          YOUR FAVORITE BRANDS DELIVERED IN STYLE
        </h2>
      </Fade>
      <Marquee pauseOnHover speed={250}>
        <div className="slide-1 h-[130px] w-[283px] flex items-center justify-center">
          <Image
            src={"/assets/images/1.jpg"}
            alt="Cookies"
            width={283}
            height={130}
          />
        </div>
        <div className="slide-2 h-[130px] w-[283px] flex items-center justify-center">
          <Image
            src={"/assets/images/2.jpg"}
            alt="Stimzy"
            width={283}
            height={130}
          />
        </div>
        <div className="slide-3 h-[130px] w-[283px] flex items-center justify-center">
          <Image
            src={"/assets/images/3.jpg"}
            alt="West cost cure"
            width={283}
            height={130}
          />
        </div>
        <div className="slide-4 h-[130px] w-[283px] flex items-center justify-center">
          <Image
            src={"/assets/images/4.jpg"}
            alt="Floracal"
            width={283}
            height={130}
          />
        </div>
        <div className="slide-5 h-[130px] w-[283px] flex items-center justify-center">
          <Image
            src={"/assets/images/5.jpg"}
            alt="Jeeter"
            width={283}
            height={130}
          />
        </div>
        <div className="slide-6 h-[130px] w-[283px] flex items-center justify-center">
          <Image
            src={"/assets/images/6.jpg"}
            alt="Jetty"
            width={283}
            height={130}
          />
        </div>
        <div className="slide-7 h-[130px] w-[283px] flex items-center justify-center">
          <Image
            src={"/assets/images/7.jpg"}
            alt="Marry Jones"
            width={283}
            height={130}
          />
        </div>
        <div className="slide-8 h-[130px] w-[283px] flex items-center justify-center">
          <Image
            src={"/assets/images/8.jpg"}
            alt="Kanha"
            width={283}
            height={130}
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Slider;
