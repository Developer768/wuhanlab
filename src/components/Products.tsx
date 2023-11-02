"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import Fade from "react-reveal/Fade";
import { Fade, Flip } from "react-reveal";

const Products = () => {
  const [redbox, setRedbox] = useState("/assets/images/p-r-1.png");
  const [yellowbox, setYellowbox] = useState("/assets/images/p-y-1.png");
  const [greenbox, setGreenbox] = useState("/assets/images/p-g-1.png");
  return (
    <div className='products section-padding bg-[url("/assets/images/bg-gradian.jpg")] bg-cover text-center'>
      <Fade bottom>
        <h2 className="mb-[20px] lg:mb-[50px] xl:mb-[80px] 2xl:mb-[100px] font-extrabold text-white text-[13px] md:text-[18px] lg:text-[24px] xl:text-[40px] 2xl:text-[51px] text-center">
          CHOOSE YOUR BIOHAZARD CONTAINER
        </h2>
      </Fade>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Flip left>
          <div className="product min-w-[310px] max-w-[500px] mx-auto">
            <div className="card relative rounded-md min-h-[400px] bg-white bg-opacity-25 p-4 flex flex-col items-center justify-center gap-10">
              <div className="product-image flex items-center justify-center">
                <Image
                  className="hover:scale-125 transition-all  top-0 left-[5%] opacity-100"
                  src={redbox}
                  alt="p-1"
                  width={435}
                  height={396}
                />
              </div>
              <div className="variants flex items-center justify-between gap-4">
                <Image
                  className={`rounded-full bg-white w-[96px] h-[96px] p-2 cursor-pointer ${
                    redbox === "/assets/images/p-r-1.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 1"
                  src={"/assets/images/p-r-1.png"}
                  width={95}
                  height={95}
                  onClick={() => setRedbox("/assets/images/p-r-1.png")}
                />
                <Image
                  className={`rounded-full bg-white w-[96px] h-[96px] p-2 cursor-pointer ${
                    redbox === "/assets/images/p-r-2.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 2"
                  src={"/assets/images/p-r-2.png"}
                  width={95}
                  height={95}
                  onClick={() => setRedbox("/assets/images/p-r-2.png")}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-4">
              <Link href={"#"}>
                <img
                  src="/assets/images/orderred.png"
                  alt="red orderred button"
                  className="w-[241px] h-[134px]"
                />
              </Link>
            </div>
          </div>
        </Flip>
        <Flip left>
          <div className="product min-w-[310px] max-w-[500px] mx-auto">
            <div className="card relative rounded-md min-h-[400px] bg-white bg-opacity-25 p-4 flex flex-col items-center justify-center gap-10">
              <div className="product-image flex items-center justify-center">
                <Image
                  className="hover:scale-125 transition-all  top-0 left-[5%] opacity-100"
                  src={yellowbox}
                  alt="p-1"
                  width={435}
                  height={396}
                />
              </div>
              <div className="variants flex items-center justify-between gap-4">
                <Image
                  className={`rounded-full bg-white w-[96px] h-[96px] p-2 cursor-pointer ${
                    yellowbox === "/assets/images/p-y-1.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 1"
                  src={"/assets/images/p-y-1.png"}
                  width={95}
                  height={95}
                  onClick={() => setYellowbox("/assets/images/p-y-1.png")}
                />
                <Image
                  className={`rounded-full bg-white w-[96px] h-[96px] p-2 cursor-pointer ${
                    yellowbox === "/assets/images/p-y-2.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 2"
                  src={"/assets/images/p-y-2.png"}
                  width={95}
                  height={95}
                  onClick={() => setYellowbox("/assets/images/p-y-2.png")}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-4">
              <Link href={"#"}>
                <img
                  src="/assets/images/orderredyellow.png"
                  alt="yellow orderred button"
                  className="w-[332px] h-[133px]"
                />
              </Link>
            </div>
          </div>
        </Flip>
        <Flip left>
          <div className="product min-w-[310px] max-w-[500px] mx-auto">
            <div className="card relative rounded-md min-h-[400px] bg-white bg-opacity-25 p-4 flex flex-col items-center justify-center gap-10">
              <div className="product-image flex items-center justify-center">
                <Image
                  className="hover:scale-125 transition-all  top-0 left-[5%] opacity-100"
                  src={greenbox}
                  alt="p-1"
                  width={435}
                  height={396}
                />
              </div>
              <div className="variants flex items-center justify-between gap-4">
                <Image
                  className={`rounded-full bg-white w-[96px] h-[96px] p-2 cursor-pointer ${
                    greenbox === "/assets/images/p-g-1.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 1"
                  src={"/assets/images/p-g-1.png"}
                  width={95}
                  height={95}
                  onClick={() => setGreenbox("/assets/images/p-g-1.png")}
                />
                <Image
                  className={`rounded-full bg-white w-[96px] h-[96px] p-2 cursor-pointer ${
                    greenbox === "/assets/images/p-g-2.png" &&
                    "border-[3px] border-red-600"
                  }`}
                  alt="Red variant 2"
                  src={"/assets/images/p-g-2.png"}
                  width={95}
                  height={95}
                  onClick={() => setGreenbox("/assets/images/p-g-2.png")}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-4">
              <Link href={"#"}>
                <img
                  src="/assets/images/orderredgreen.png"
                  alt="green orderred button"
                  className="w-[322px] h-[139px]"
                />
              </Link>
            </div>
          </div>
        </Flip>
      </div>
    </div>
  );
};

export default Products;
