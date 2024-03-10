/* eslint-disable @next/next/no-img-element */
import React from "react";

export const AchievementSection = () => {
  return (
    <div className="mx-auto max-w-[1540px] py-10 lg:py-20  px-[20px] lg:px-[65px]">
      <div className="w-full grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-6  ">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              {" "}
              <div className="w-[54px] h-[5px] bg-[#903839] rounded-full"></div>{" "}
              Thành tựu
            </div>
            <div className="flex flex-col gap-8">
              <div className="font-bold text-[24px]  text-[#222222]  leading-7 ">
                Lorem ipsum dolor sit amet consectetur. Fames urna hac vitae
                ultrices suspendisse. Suscipit ac gravida rhoncus vestibulum
                viverra
              </div>
              <span className="text-[16px] text-[#222222] leading-7">
                Lorem ipsum dolor sit amet consectetur. Egestas sit duis auctor
                rhoncus luctus maecenas. Quam sodales sed et ut molestie. Felis
                vestibulum volutpat nibh pellentesque.
              </span>
              <span className="text-[16px] text-[#222222] leading-7">
                Lorem ipsum dolor sit amet consectetur. Egestas sit duis auctor
                rhoncus luctus maecenas. Quam sodales sed et ut molestie. Felis
                vestibulum volutpat nibh pellentesque.
              </span>
              <div className="grid grid-cols-3">
                <div className="flex flex-col items-center">
                    <span className="text-[40px] text-[#DF4E4F] font-bold">2000+</span>
                    <span className="text-[#222222] text-center"> Vụ án được giải quyết</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-[40px] text-[#DF4E4F] font-bold">20+</span>
                    <span className="text-[#222222] text-center">Năm kinh nghiệm</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-[40px] text-[#DF4E4F] font-bold">95%</span>
                    <span className="text-[#222222] text-center"> Tỉ lệ thắng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 relative px-10 lg:px-0 lg:py-10 ">
          <div className="absolute z-[1] w-full h-[90%] lg:w-[90%] lg:h-full bottom-0 lg:top-0  right-0 bg-[#903839]"></div>
          <img
            className=" relative z-[2] w-full h-full bg-cover"
            src={`/assets/images/achievement_image.jpg`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
