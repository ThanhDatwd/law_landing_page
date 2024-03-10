/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ReasonForChoosingUsSection = () => {
  return (
    <div className="mx-auto max-w-[1540px] py-10 lg:py-20  px-[20px] lg:px-[65px]">
      <div className="w-full grid grid-cols-12 gap-6 items-center">
      <div className="col-span-12 lg:col-span-6 relative px-10 lg:px-0 lg:py-10 ">
          <div className="absolute z-[1] w-full h-[90%] lg:w-[90%] lg:h-full bottom-0 lg:top-0  left-0 bg-[#903839]"></div>
          <img
            className=" relative z-[2] w-full h-full bg-cover"
            src={`/assets/images/choosing_image.jpg`}
            alt=""
          />
        </div>
        <div className="col-span-12 lg:col-span-6  ">
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-[32px] lg:text-[56px]  text-[#222222]">
              Tại Sao Nên Chọn Chúng Tôi?
              </h2>
              
              <ul className="flex flex-col gap-4">
                <li><strong>Kinh nghiệm:</strong> Các luật sư có hơn 20 năm kinh nghiệm.</li>
                <li><strong>Giá Cả Hợp Lý: </strong> Các luật sư có hơn 20 năm kinh nghiệm.</li>
                <li><strong>Kinh nghiệm:</strong> Không phí phát sinh cũng như hoá đơn sai dịch vụ</li>
                <li><strong>Đạt Nhiều Giải Thưởng:</strong> Lorem ipsum dolor sit amet consectetur. Eu</li>
              </ul>
              <button className="w-fit hidden lg:block rounded-[50px]  py-4 px-6  bg-[#903839] text-[#fff]">
                Tư vấn miễn phí
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};
