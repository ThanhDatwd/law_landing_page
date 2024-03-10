/* eslint-disable @next/next/no-img-element */
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { SendIcon } from "@/assets/icons/SendIcon";
import React from "react";

export const QAndASection = () => {
  return (
    <div className="bg-[#15121C]">
      <div className="mx-auto max-w-[1540px] py-10 lg:py-20  px-[20px] lg:px-[65px]  grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-[#fff] text-[24px] mb-2">Liên hệ tư vấn</p>
            <h3 className="text-[32px] text-[#E6CFAE] font-bold">
              Nhận tư vấn miễn phí
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <input
              type="text"
              className="w-full text-[#fff] p-4 rounded  outline-none bg-transparent border-2 border-[#A9A0C1]"
              placeholder="Họ và tên"
            />
            <input
              type="text"
              className="w-full text-[#fff] p-4 rounded  outline-none bg-transparent border-2 border-[#A9A0C1]"
              placeholder="Email"
            />
            <textarea
              rows={5}
              className="w-full text-[#fff] p-4 rounded  outline-none bg-transparent border-2 border-[#A9A0C1]"
              placeholder="Để lại lời nhắn"
            ></textarea>
            <button className="w-fit hidden lg:flex items-end gap-2 rounded-[50px]  py-4 px-6  bg-[#903839] text-[#fff]">
              <span className="mb-[1px]">Để lại lời nhắn</span> <SendIcon />
            </button>
          </div>
        </div>
        {/* ================= */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-[#fff] text-[24px] mb-2">
              Bạn có câu hỏi nào không?
            </p>
            <h3 className="text-[32px] text-[#E6CFAE] font-bold">
              Các câu hỏi thường gặp
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full flex items-center justify-between gap-3  text-[#fff] p-4 rounded  outline-none bg-transparent border-2 border-[#A9A0C1]">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
              <div className="rotate-180">
                <ArrowRightIcon color="#fff" />
              </div>
            </div>
            <div className="w-full flex items-center justify-between gap-3  text-[#fff] p-4 rounded  outline-none bg-transparent border-2 border-[#A9A0C1]">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
              <div className="rotate-180">
                <ArrowRightIcon color="#fff" />
              </div>
            </div>
            <div className="w-full flex items-center justify-between gap-3  text-[#fff] p-4 rounded  outline-none bg-transparent border-2 border-[#A9A0C1]">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
              <div className="rotate-180">
                <ArrowRightIcon color="#fff" />
              </div>
            </div>
            <div className="w-full flex items-center justify-between gap-3  text-[#fff] p-4 rounded  outline-none bg-transparent border-2 border-[#A9A0C1]">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
              <div className="rotate-180">
                <ArrowRightIcon color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
