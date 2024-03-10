/* eslint-disable @next/next/no-img-element */
import React from "react";

export const AboutSection = () => {
  return (
    <div className="mx-auto max-w-[1540px] py-10 lg:py-20  px-[20px] lg:px-[65px]">
      <div className="w-full grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-6 relative px-10 lg:px-0 lg:py-10 ">
          <div className="absolute z-[1] w-full h-[90%] lg:w-[90%] lg:h-full bottom-0 lg:top-0  left-0 bg-[#903839]"></div>
          <img
            className=" relative z-[2] w-full h-full bg-cover"
            src={`/assets/images/about_image.jpg`}
            alt=""
          />
        </div>
        <div className="col-span-12 lg:col-span-6  ">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              {" "}
              <div className="w-[54px] h-[5px] bg-[#903839] rounded-full"></div>{" "}
              Về chúng tôi
            </div>
            <div className="flex flex-col gap-8">
              <div className="font-bold text-[24px]  text-[#222222]  leading-7 ">
                Lorem ipsum dolor sit amet consectetur. Fames urna hac vitae
                ultrices suspendisse. Suscipit ac gravida rhoncus vestibulum
                viverra
              </div>
              <span className="text-[20px] text-[#222222] leading-7">
                Lorem ipsum dolor sit amet consectetur. Egestas sit duis auctor
                rhoncus luctus maecenas. Quam sodales sed et ut molestie. Felis
                vestibulum volutpat nibh pellentesque.
              </span>
              <span className="text-[20px] text-[#222222] leading-7">
                Lorem ipsum dolor sit amet consectetur. Egestas sit duis auctor
                rhoncus luctus maecenas. Quam sodales sed et ut molestie. Felis
                vestibulum volutpat nibh pellentesque.
              </span>
              <button className="w-fit hidden lg:block rounded-[50px]  py-4 px-6  bg-[#903839] text-[#fff]">
                Tư vấn miễn phí
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
