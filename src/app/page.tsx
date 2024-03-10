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
      <HerroSection />
      <AboutSection />
      <ServiceSection />
      <AchievementSection />
      <TeamSection/>
      <ReasonForChoosingUsSection/>
      <QAndASection/>
    </DefaultLayout>
  );
}
