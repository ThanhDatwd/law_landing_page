"use client";
import { AboutSection } from "@/components/home/AboutSection";
import { AchievementSection } from "@/components/home/AchievementSection";
import { HerroSection } from "@/components/home/HerroSection";
import { QAndASection } from "@/components/home/QAndASection";
import { ReasonForChoosingUsSection } from "@/components/home/ReasonForChoosingUsSection";
import { ServiceSection } from "@/components/home/ServiceSection";
import { TeamSection } from "@/components/home/TeamSection";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
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
      <div className="relative w-full h-[80vh] bg-cover bg-center" style={{backgroundImage: 'url(/assets/images/banner.jpg'}}>
        <div className="absolute  top-0 left-[50%] text-center  translate-x-[-50%] w-[767px] px-5 h-full flex flex-col gap-8 items-center justify-center max-w-full">
          <h2 className="text-[32px] text-center lg:text-[40px] leading-[50px] text-[#E6CFAE]">
            Lorem ipsum dolor sit amet consectetur. Vel aliquam dignissim nunc
            at turpis
          </h2>
          <span className="text-[#fff]">
            Lorem ipsum dolor sit amet consectetur. Vel aliquam dignissim nunc
            at turpis
          </span>
          <button className="w-fit hidden lg:block rounded-[50px]  py-4 px-6  bg-[#903839] text-[#fff]">
            Tìm hiểu thêm
          </button>
        </div>
      </div>
      {/* <HerroSection /> */}
      <AboutSection />
      <ServiceSection />
      <AchievementSection />
      <TeamSection/>
      <ReasonForChoosingUsSection/>
      <QAndASection/>
    </DefaultLayout>
  );
}
