/* eslint-disable @next/next/no-img-element */
import React from "react";

export const TeamSection = () => {
  return (
    <div className="bg-[#15121C]">
      <div className="mx-auto max-w-[1540px] py-10 lg:py-20  px-[20px] lg:px-[65px] flex flex-col items-center gap-8">
        <h2 className="text-[32px] lg:text-[48px] text-[#E6CFAE] m-0 text-center">
          Đội Ngũ Luật Sư{" "}
        </h2>
        <div className="text-center text-[20px] text-[#FFFFFF]">
          Lorem ipsum dolor sit amet consectetur. Turpis tellus risus urna quis
          orci et sit. Mattis euismod cursus tellus adipiscing in auctor
          posuere. Lectus lorem ultrices et mi sit urna. Dignissim vel odio nibh
          ut et augue.
        </div>
        <div className="w-full grid-cols-2 grid lg:grid-cols-4 gap-6">
          <div className=" rounded flex flex-col items-center gap-6">
            <img
              className="w-full aspect-[1/1]"
              src="/assets/images/member-1.jpg"
              alt=""
            />
            <div className="flex flex-col items-center">
              <span className="text-[22px] lg:text-[32px] text-center text-[#E6CFAE] font-bold">
                Nguyễn Văn A
              </span>
              <span className="text-[20px] text-[#E6CFAE]">Luật hình sự</span>
            </div>
          </div>
          <div className=" rounded flex flex-col items-center gap-6">
            <img
              className="w-full aspect-[1/1]"
              src="/assets/images/member-2.jpg"
              alt=""
            />
            <div className="flex flex-col items-center">
              <span className="text-[22px] lg:text-[32px] text-center text-[#E6CFAE] font-bold">
                Nguyễn Văn A
              </span>
              <span className="text-[20px] text-[#E6CFAE]">Luật gia đình</span>
            </div>
          </div>
          <div className=" rounded flex flex-col items-center gap-6">
            <img
              className="w-full aspect-[1/1]"
              src="/assets/images/member-3.jpg"
              alt=""
            />
            <div className="flex flex-col items-center">
              <span className="text-[22px] lg:text-[32px] text-center text-[#E6CFAE] font-bold">
                Nguyễn Văn A
              </span>
              <span className="text-[20px] text-[#E6CFAE]">Luật dân sự</span>
            </div>
          </div>
          <div className=" rounded flex flex-col items-center gap-6">
            <img
              className="w-full aspect-[1/1]"
              src="/assets/images/member-4.png"
              alt=""
            />
            <div className="flex flex-col items-center">
              <span className="text-[22px] lg:text-[32px] text-center text-[#E6CFAE] font-bold">
                Nguyễn Văn A
              </span>
              <span className="text-[20px] text-[#E6CFAE]">Luật lao động</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
