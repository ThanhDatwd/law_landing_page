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
      <div className="flex items-center mx-auto max-w-[1540px]  px-[20px] lg:px-[65px] gap-2">
        <span>Trang chủ</span> <span>{`>`}</span>
        <span>Dịch vụ</span> <span>{`>`}</span>
        <span className="text-[#903839]">Dịch vụ cho doanh nghiệp</span>
      </div>
      <ServiceForBusinessSection/>
    </DefaultLayout>
  );
}
