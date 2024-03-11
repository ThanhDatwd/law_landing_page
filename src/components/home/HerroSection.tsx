/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import { url } from "inspector";
import React from "react";

export const HerroSection = () => {
  return (
    <div className="relative w-full h-[80vh] bg-cover" style={{backgroundImage: 'url(/assets/images/banner.jpg'}}>
    <div className="absolute  top-0 left-[50%] translate-x-[-50%] w-[767px] px-5 h-full flex flex-col gap-8 items-center justify-center max-w-full">
      <h2 className="text-[32px] lg:text-[40px] leading-[50px] text-[#E6CFAE]">
        Lorem ipsum dolor sit amet consectetur. Vel aliquam dignissim nunc
        at turpis
      </h2>
      <span className="text-[#fff]">
        Lorem ipsum dolor sit amet consectetur. Vel aliquam dignissim nunc
        at turpis
      </span>
      <button className="w-fit hidden lg:block rounded-[50px]  py-4 px-6  bg-[#903839] text-[#fff]">
        Tìm hiểu thêm
      </button>
    </div>
  </div>
  );
};
