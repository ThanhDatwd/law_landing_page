"use client";

import { useState } from "react";

import Header from "./Header";
import "../../../i18n";
import { Footer } from "./Footer";
import { MenuIcon } from "@/assets/icons/MenuIcon";

export const DefaultLayout = ({
  children,
  pageTitle,
  containerStyle,
  headerStyle,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  containerStyle: string;
  headerStyle?: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      // Xử lý sự kiện tại đây
      document.getElementById("input-search")?.focus();
    }
  };

  return (
    <>
      <main
        className={`ease-soft-in-out relative h-full transition-all duration-200 ${containerStyle}`}
      >
        <div className="w-full" onKeyDown={handleKeyPress} tabIndex={50}>
         <div className="w-full fixed top-0 z-50"> <Header headerStyle={headerStyle} /></div>
          <div className="relative w-full mx-auto pt-[112px] " id="box">
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};
