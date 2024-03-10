/* eslint-disable @next/next/no-img-element */
"use client";

import { getStaticURL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="z-20" href={"/"}>
      <img
        className="w-[180px] h-full "
        src={`${getStaticURL()}/assets/images/logo.svg`}
        alt="green_software"
      />
    </Link>
  );
};
