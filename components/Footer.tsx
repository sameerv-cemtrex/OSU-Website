import { footer } from "@/app/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container lg:px-[6.75rem] mt-10 sm:mt-[72px] mb-11 sm:mb-[112px] flex flex-col gap-6 lg:flex-row items-center justify-between">
      <Link href={"/"}>
        <img src={footer.logo} alt="footer logo" className="w-[200px]" />
      </Link>

      <div className="sm:flex items-center text-center space-x-4 space-y-4 sm:space-y-0 text-sm">
        {footer.links.map((link, index) => (
          <Link href={link.url} key={index}>
            <p className="underline underline-offset-2">{link.text}</p>
          </Link>
        ))}

        <p>Copyright © 2024. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
