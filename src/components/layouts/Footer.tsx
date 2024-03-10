/* eslint-disable @next/next/no-img-element */
"use client";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import { Logo } from "../Logo";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";

export const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <div className="w-full xs:px-5 lg:px-14 py-20 text-[20px]">
      <div className="grid grid-cols-12 gap-10 ">
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 ">
          <div className="flex flex-col gap-2">
            <div className="w-[56px] h-[56px] rounded-full bg-[#D9D9D9]"></div>
            <div><strong>Lorem ipsum</strong> dolor sit amet consectetur. Blandit vitae justo nunc urna eget fusce. Habitant.</div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/images/black_telephone.svg" alt="" />
            <span>0123456789</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/images/location_on.svg" alt="" />
            <span>Abc đường số 1, Phường 2, Quận 3, Thành phố Hồ Chí Minh</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/images/mail.svg" alt="" />
            <span>email@gmail.com</span>
          </div>
        </div>
        <div className=" col-span-12 lg:col-span-2 flex flex-col gap-2">
          <span className="font-bold">Khám phá</span>
          <span className="">Về chúng tôi</span>
          <span className="">Lĩnh vực pháp luật</span>
          <span className="">Luật sư</span>
          
        </div>
        <div className="col-span-12 lg:col-span-2 flex flex-col gap-2">
          <span className="font-bold">Hỗ trợ</span>
          <span className="">FAQ</span>
          <span className="">Dịch vụ</span>
          <span className="">Nghề nghiệp</span>
          
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-2">
          <span className="font-bold">Để lại Email để kết nối với chúng tôi</span>
          <div className="relative w-full h-[42px] flex items-center justify-between text-[#fff]  rounded  outline-none bg-transparent border-2 border-[#A9A0C1]">
              <input className="w-full" type="text" name="" id="" />
              <div className="absolute right-0 top-0 bottom-0 rotate-180 bg-[#903839] w-10 h-10 flex items-center justify-center">
                <ArrowRightIcon color="#fff" />
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};
