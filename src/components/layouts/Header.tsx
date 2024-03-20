/* eslint-disable @next/next/no-img-element */
"use client";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "../Logo";
import { MenuIcon } from "@/assets/icons/MenuIcon";

const Header = ({ headerStyle }: { headerStyle?: string }) => {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const pathname = usePathname();
  return (
    <>
      <div className="w-full flex  ">
        <nav
          className={` w-full xs:px-5 lg:px-14 bg-[#fff] py-4 flex items-center  transition-all shadow-md duration-250 ease-soft-in ${headerStyle}`}
          navbar-scroll="true"
        >
          <div className="grid grid-cols-12 w-full">
            <div className="hidden col-span-4 lg:flex items-center gap-8">
              <Link
                href={"/"}
                className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
                  pathname === "/"
                    ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]"
                    : "text-[#000]"
                }   hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
              >
                TRANG CHỦ 
              </Link>
              <Link
                href={"/services"}
                className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
                  pathname === "/services"
                    ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]"
                    : "text-[#000]"
                }  hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
              >
                DỊCH VỤ
              </Link>
              <Link
                href={"/contact"}
                className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] hover:text-[#DBB070] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
                  pathname === "/contact"
                    ? "after:scale-x-100 after:border-[#DBB070] text-[#DBB070]"
                    : "text-[#000]"
                }  hover:after:border-[#DBB070] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
              >
                LIÊN HỆ
              </Link>
              
            </div>
            <div className="col-span-4 flex items-center justify-center">
              <img className="w-20 h-20 rounded-full" src="" alt="" />
            </div>
            <div className=" col-span-4 flex justify-end items-center gap-14 ">
              <button className="hidden lg:block rounded-[50px]  py-4 px-6  bg-[#903839] text-[#fff]">
                Tư vấn miễn phí
              </button>
              {/* <div className=" block lg:hidden" onClick={() => toggleMenu()}>
                <MenuIcon />
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
