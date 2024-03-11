"use client";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { ServiceForBusinessSection } from "@/components/service/ServiceForBusinessSection";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ServicePage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
        return;
      }
      setIsScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#fff] dark:bg-[#fff]"
      // headerStyle={`${!isScroll && "bg-[transparent] py-4 shadow-none"}  `}
    >
      <div
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/images/service_banner.jpeg" }}
      >
        <div className="absolute  top-0 left-[50%] text-center  translate-x-[-50%] w-[767px] px-5 h-full flex flex-col gap-8 items-center justify-center max-w-full">
          <h2 className="text-[32px] text-center lg:text-[40px] leading-[50px] text-[#fff]">
            Lorem ipsum dolor sit amet consectetur. Vel aliquam dignissim nunc
            at turpis
          </h2>
        </div>
      </div>
      <div className="flex items-center mx-auto max-w-[1540px]  mt-10 px-[20px] lg:px-[65px] gap-2">
        <span>Trang chủ</span> <span>{`>`}</span>
        <span>Dịch vụ</span> <span>{`>`}</span>
        <span className="text-[#903839]">Dịch vụ cho doanh nghiệp</span>
      </div>
      <ServiceForBusinessSection />
    </DefaultLayout>
  );
}
