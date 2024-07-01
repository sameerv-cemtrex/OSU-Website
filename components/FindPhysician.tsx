"use client";
import { primaryPhysician } from "@/app/data";
import React from "react";
import { useMediaQuery } from "react-responsive";

const FindPhysician = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <div className="py-14  sm:pt-[142px] sm:pb-[90px] bg-white">
      <div className="container px-6 xl:px-[6.75rem] h-full sm:flex items-center sm:gap-10 lg:gap-[170px]">
        <div className="sm:w-[42%]">
          <h4 className="text-[40px] font-bold font-grozen-medical leading-10 ">
            FIND A {isTablet ? "PRIMARY CARE PHYSICIAN" : "PCP"}
          </h4>
          <p className="mt-6 text-lg font-normal leading-[150%]">
            {primaryPhysician.subtitle}
          </p>

          <div className="mt-10">
            <p className="uppercase font-grozen-medical font-medium text-base">
              ENTER YOUR ZIPCODE
            </p>

            <div className="flex items-center space-x-3 my-7">
              <input
                type="text"
                className="border-b-2 border-[#E54F2E] bg-white px-6 py-4 text-lg text-black"
              />
              <button
                type="button"
                className="bg-[#E54F2E] active:scale-95 active:shadow-lg active:bg-orange-600 duration-50 ease-in-out text-white font-grozen-medical text-lg font-semibold tracking-[0.45px] px-6 py-4 rounded"
              >
                GO
              </button>
            </div>
          </div>

          <div className="bg-[#F8F3F1] rounded p-3 ">
            <p className="font-medium">
              {primaryPhysician.linkText1}
              <a
                href={primaryPhysician.link1}
                className="text-[#E54F2E] underline underline-offset-2"
              >
                Go to Website
              </a>
            </p>
          </div>

          <div className="bg-[#F8F3F1] rounded p-3 mt-2">
            <p className="font-medium">
              {primaryPhysician.linkText2}
              <a
                href={primaryPhysician.link2}
                className="text-[#E54F2E] underline underline-offset-2"
              >
                Go to Website
              </a>
            </p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-3 grid-row-3 mt-14 sm:mt-0">
          <img
            alt="physician 1 "
            src={primaryPhysician.image1}
            className="w-full h-[167px] sm:w-[340px] sm:h-[289px] rounded-[20px] row-span-2 row-start-1 col-span-2 col-start-2 object-cover object-center shadow-2xl shadow-black/50"
          />
          <img
            alt="physician 2 "
            src={primaryPhysician.image2}
            className=" z-20 w-full h-[167px] sm:w-[340px] sm:h-[289px] rounded-[20px] row-span-2 row-start-2 col-span-2 col-start-1 object-cover object-center shadow-2xl shadow-black/50"
          />
        </div>
      </div>
    </div>
  );
};

export default FindPhysician;
