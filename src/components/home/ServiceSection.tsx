/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ServiceSection = () => {
  return (
    <div className="bg-[#15121C]">

    <div className="mx-auto max-w-[1540px] py-10 lg:py-20  px-[20px] lg:px-[65px] flex flex-col items-center gap-8">
        <h2 className="text-[32px] lg:text-[48px] text-[#E6CFAE] text-center">Lĩnh Vực Pháp Luật </h2>
      <div className="w-full grid-cols-1 grid lg:grid-cols-3 gap-6">
        <div className="py-[54px] px-5 bg-[#231E30] rounded flex flex-col items-center gap-6">
            <img className="w-20 h-20" src="/assets/images/card_travel.svg" alt="" />
            <span className="text-[32px] text-[#E6CFAE] font-bold text-center">Doanh nghiệp</span>
            <span className="text-[20px] text-[#E6CFAE] text-center">Lorem ipsum dolor sit amet consectetur.</span>
        </div>
        <div className="py-[54px] px-5 bg-[#231E30] rounded flex flex-col items-center gap-6">
            <img className="w-20 h-20" src="/assets/images/domain.svg" alt="" />
            <span className="text-[32px] text-[#E6CFAE] font-bold text-center">Bất động sản</span>
            <span className="text-[20px] text-[#E6CFAE] text-center">Lorem ipsum dolor sit amet consectetur.</span>
        </div>
        <div className="py-[54px] px-5 bg-[#231E30] rounded flex flex-col items-center gap-6">
            <img className="w-20 h-20" src="/assets/images/bank.svg" alt="" />
            <span className="text-[32px] text-[#E6CFAE] font-bold text-center">Tài chính - Ngân hàng</span>
            <span className="text-[20px] text-[#E6CFAE] text-center">Lorem ipsum dolor sit amet consectetur.</span>
        </div>
        <div className="py-[54px] px-5 bg-[#231E30] rounded flex flex-col items-center gap-6">
            <img className="w-20 h-20" src="/assets/images/psychology.svg" alt="" />
            <span className="text-[32px] text-[#E6CFAE] font-bold text-center">Sở hữu trí tuệ</span>
            <span className="text-[20px] text-[#E6CFAE] text-center">Lorem ipsum dolor sit amet consectetur.</span>
        </div>
        <div className="py-[54px] px-5 bg-[#231E30] rounded flex flex-col items-center gap-6">
            <img className="w-20 h-20" src="/assets/images/currency.svg" alt="" />
            <span className="text-[32px] text-[#E6CFAE] font-bold text-center">Thuế</span>
            <span className="text-[20px] text-[#E6CFAE] text-center">Lorem ipsum dolor sit amet consectetur.</span>
        </div>
        <div className="py-[54px] px-5 bg-[#231E30] rounded flex flex-col items-center gap-6">
            <img className="w-20 h-20" src="/assets/images/emoji_people.svg" alt="" />
            <span className="text-[32px] text-[#E6CFAE] font-bold text-center">Công dân</span>
            <span className="text-[20px] text-[#E6CFAE] text-center">Lorem ipsum dolor sit amet consectetur.</span>
        </div>
      </div>
    </div>
    </div>
  );
};
