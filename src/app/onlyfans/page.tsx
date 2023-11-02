"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Fade, Flip, Slide } from "react-reveal";

const OnlyFans = () => {
  const [condition, setCondition] = useState<boolean>(false);
  setTimeout(() => setCondition(true), 1500);
  return (
    <main className="onlyfans-page">
      {condition ? (
        <>
          <div className="banner relative flex items-center justify-center">
            <div className="absolute z-[9] flex flex-col items-center justify-center">
              <Fade bottom>
                <h2 className="mb-[10px]  font-extrabold text-white text-[13px] md:text-[18px] lg:text-[24px] xl:text-[40px] 2xl:text-[51px] text-center">
                  LIKE THIS CONTENT?
                </h2>
              </Fade>
              <Fade bottom>
                <h2 className="mb-[10px]  font-extrabold text-white text-[13px] md:text-[18px] lg:text-[24px] xl:text-[40px] 2xl:text-[51px] text-center">
                  SUBSCRIBE TO
                </h2>
              </Fade>
              <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] xl:w-[100px] xl:h-[100px] 2xl:w-[130px] 2xl:h-[130px]">
                <Flip left>
                  <Link href={"#"}>
                    <img
                      alt="onlyfans icon"
                      src="/assets/images/onlyfansicon.png"
                    />
                  </Link>
                </Flip>
              </div>
            </div>
            <video
              src="/assets/videos/Banner-video.mp4"
              autoPlay
              loop
              muted
              className="banner-bg-video"
            ></video>
          </div>
          <div className="social xl:my-[100px] 2xl:my-[150px] relative flex  flex-col-reverse xl:flex-row xl:items-end 2xl:flex-row 2xl:items-end">
            <div className="content pt-[50px]   xl:w-[50%] 2xl:w-[35%]">
              <Fade bottom>
                <h2 className="ml-4 2xl:ml-[105px] mb-[10px] leading-tight font-extrabold text-black text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] ">
                  Join the Wuhan Lab Community on Telegram
                </h2>
              </Fade>
              <Fade bottom>
                <p className="ml-4 2xl:ml-[105px]  font-medium text-black sm:text-[13px]  text-[16px]">
                  Subscribe to our Telegram channel for real-time updates,
                  exclusive offers, and early glimpses of exciting upcoming
                  items, including Wuhan Lab masks, bumper stickers, and fortune
                  cookies! Stay connected for a world of surprises.
                </p>
              </Fade>
              <Slide left>
                <img
                  alt="social-img"
                  src="/assets/images/social-img.png"
                  className="mt-[30px] 2xl:mt-[55px] lg:w-[50%]"
                />
              </Slide>
            </div>
            <div className="img 2xl:w-[65%] flex items-center justify-end">
              <img
                alt="social-bg"
                src="/assets/images/social-bg.png"
                className=""
              />
            </div>
          </div>
          {/* <div className=' bg-cover p-4 rounded-tr-[100px] rounded-bl-[100px] py-[150px] bg-gradient-to-tr to-[#803DDC] via-[#D6319C] from-[#DE7C30]'> */}
          <div className=" bg-cover p-4 rounded-tr-[100px] rounded-bl-[100px] py-[80px] bg-gradient-to-tr to-[#803DDC] via-[#D6319C] from-[#DE7C30] xl:flex 2xl:flex">
            <div className="content xl:w-[30%] 2xl:w-[20%] xl:my-auto 2xl:my-auto 2xl:ml-auto">
              <Fade bottom>
                <h2 className=" mb-[10px] leading-tight font-extrabold text-white text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] ">
                  Follow Wuhan Lab on Instagram
                </h2>
              </Fade>
              <Fade bottom>
                <p className="  font-medium text-white sm:text-[13px]  text-[16px] mb-[20px]">
                  Join us on Instagram to get instant updates, exclusive deals,
                  and early peeks at upcoming items like Wuhan Lab masks, bumper
                  stickers, and fortune cookies! Stay tuned for delightful
                  surprises
                </p>
              </Fade>
              <div className="w-fit">
                <Slide bottom>
                  <Link href={"#"}>
                    <img alt="phone" src="/assets/images/instaicon.png" />
                  </Link>
                </Slide>
              </div>
            </div>
            <div className="xl:w-[70%] 2xl:w-[70%] my-4 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:justify-center md:flex md:flex-col md:gap-4 md:items-center md:justify-center lg:flex lg:flex-wrap lg:justify-center  lg:gap-4 xl:flex xl:flex-wrap xl:gap-4 xl:justify-end 2xl:flex 2xl:flex-wrap 2xl:gap-4 2xl:justify-end">
              <Slide bottom>
                  <img alt="phone" src="/assets/images/weedleft.png" className="w-[287px] h-[396px] 2xl:mt-auto" />
              </Slide>
              <Slide bottom>
                  <img alt="phone" src="/assets/images/phone.png" />
              </Slide>
              <Slide right>
                  <img alt="phone" src="/assets/images/weedright.png" className="w-[327px] h-[469px] 2xl:mb-auto" />
              </Slide>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-black">
          <video
            src="/assets/videos/Fireworks.mp4"
            autoPlay
            muted
            className="fireworks-video"
          ></video>
        </div>
      )}
    </main>
  );
};

export default OnlyFans;
