/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ServiceForBusinessSection = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-[1540px] pt-10 pb-10 lg:pb-20  px-5 lg:px-[65px]  grid grid-cols-1 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:border-b lg:border-b-[#CDB7B7]">
          <div className="flex flex-col gap-6 py-5 lg:p-10 lg:border-r lg:border-r-[#CDB7B7]">
            <div className="flex items-center gap-8 ">
              <img className="w-[45px] h-[45px]" src="/assets/images/khoi-su-kd.svg" alt="" />
              <span className="text-[24px] text-[#000000] font-bold">
                Khởi sự kinh doanh
              </span>
            </div>
            <span className="text-[18px]">
              Cung cấp thông tin thủ tục hành chính, dịch vụ công trực tuyến
              liên quan đến việc bắt đầu đầu tư kinh doanh và hình thành các
              doanh nghiệp, tổ chức, hộ kinh doanh.
            </span>
            <span className="text-[18px] text-[#903839]">
              Kinh doanh trong ngành nghề đầu tư kinh doanh có điều kiện; Đầu
              tư; Thành lập doanh nghiệp, hộ kinh doanh, loại hình tổ chức khác
            </span>
          </div>
          {/* ====== */}
          <div className="flex flex-col gap-6 py-5 lg:p-10 ">
            <div className="flex items-center gap-8 ">
            <img className="w-[45px] h-[45px]" src="/assets/images/ldbhxh.svg" alt="" />
              <span className="text-[24px] text-[#000000] font-bold">
                Lao động và bảo hiểm xã hội
              </span>
            </div>
            <span className="text-[18px]">
              Cung cấp thông tin thủ tục hành chính, dịch vụ công trực tuyến về
              quá trình quản lý, sử dụng lao động và trách nhiệm pháp lý của
              doanh nghiệp liên quan đến bảo hiểm xã hội của người lao động.
            </span>
            <span className="text-[18px] text-[#903839]">
              Bảo hiểm xã hội; Quản lý lao động
            </span>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col gap-6 py-5 lg:p-10 lg:border-r lg:border-r-[#CDB7B7]">
            <div className="flex items-center gap-8 ">
            <img className="w-[45px] h-[45px]" src="/assets/images/tcdn.svg" alt="" />

              <span className="text-[24px] text-[#000000] font-bold">
                Tài chính doanh nghiệp
              </span>
            </div>
            <span className="text-[18px]">
              Cung cấp thông tin thủ tục hành chính, dịch vụ công trực tuyến để
              doanh nghiệp thực hiện các nghĩa vụ về thuế và thực hiện các nhu
              cầu, yêu cầu trong quản lý tài chính doanh nghiệp.
            </span>
            <span className="text-[18px] text-[#903839]">
              Tiếp cận vốn, tín dụng; Thuế; hoá đơn
            </span>
          </div>
          {/* ====== */}
          <div className="flex flex-col gap-6 py-5 lg:p-10 ">
            <div className="flex items-center gap-8 ">
            <img className="w-[45px] h-[45px]" src="/assets/images/datdaixaydung.svg" alt="" />

              <span className="text-[24px] text-[#000000] font-bold">
                Điện lực, đất đai, xây dụng
              </span>
            </div>
            <span className="text-[18px]">
              Cung cấp thông tin thủ tục hành chính, dịch vụ công trực tuyến
              liên quan đến việc đầu tư, tiếp cận đất đai, xây dựng công trình,
              phòng cháy chữa cháy, môi trường và tiếp cận điện năng.
            </span>
            <span className="text-[18px] text-[#903839]">
              Tiếp cận điện năng; Môi trường; Phòng cháy chữa cháy; Xây dựng
              công trình; Tiếp cận đất đai
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
