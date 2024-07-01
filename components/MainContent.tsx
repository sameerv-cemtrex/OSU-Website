import { mainContent } from "@/app/data";
import React from "react";

const MainContent = () => {
  return (
    <div className="mx-6 min-[1440px]:container rounded-3xl bg-[#F8F3F1] px-[32px] lg:px-[86px] pt-[81px] sm:py-[82px] lg:pt-[138px] lg:pb-[156px] space-y-14 sm:space-y-[104px] relative">
      <div className="sm:flex items-center gap-16 lg:gap-20">
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-[40px] lg:text-5xl leading-[100%]">
            {mainContent[0].title}
          </h4>
          <p className="text-lg font-medium">{mainContent[0].subtitle}</p>
        </div>

        <div className="flex-1 relative mt-10 sm:mt-0">
          <img
            src={mainContent[0].image}
            alt="main-content-img"
            className="w-full xl:w-[460px] h-[235px] lg:h-[320px] rounded-[20px] object-cover object-center -scale-x-100"
          />
          <div className="absolute top-0 left-0 z-10 w-full xl:w-[460px] h-[235px] lg:h-[320px] rounded-[20px] getting-started-shadow -scale-x-100" />
        </div>
      </div>

      <div className="sm:flex flex-row-reverse items-center gap-16 lg:gap-20">
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-[32px] lg:text-5xl leading-[100%]">
            {mainContent[1].title}
          </h4>
          <p className="text-lg font-medium">{mainContent[1].subtitle}</p>
        </div>

        <div className="flex-1 relative mt-10 sm:mt-0">
          <img
            src={mainContent[1].image}
            alt="main-content-img"
            className="w-full lg:w-[460px] h-[253px] lg:h-[320px] rounded-[20px] object-cover object-center clear-space-shadow"
          />
          <img
            alt="clear space area overlay"
            src="/images/clear-space-area.svg"
            className="absolute z-10 left-[34px] sm:left-[50px] lg:left-[100px] -bottom-[14.5px] lg:-bottom-[40.5px] clear-space-area"
          />
        </div>
      </div>

      <div className="sm:flex items-center gap-16 lg:gap-20">
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-[32px] lg:text-5xl leading-[100%]">
            {mainContent[2].title}
          </h4>
          <p className="text-lg font-medium">{mainContent[2].subtitle}</p>
        </div>

        <div className="flex-1 mt-20 sm:mt-0">
          <div className="relative w-full lg:w-[460px] h-[253px] lg:h-[320px] dress-casual-shadow rounded-[20px] bg-gradient-radial to bottom from-[#F7F2F0]  to-[#E54F2E]">
            <img
              src={mainContent[2].image}
              alt="main-content-img"
              className="h-[145%] absolute bottom-0 left-[50%] -translate-x-[50%]"
            />
          </div>
        </div>
      </div>

      <div className="sm:flex flex-row-reverse items-center gap-16 lg:gap-20">
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-[32px] lg:text-5xl leading-[100%]">
            {mainContent[3].title}
          </h4>
          <p className="text-lg font-medium">{mainContent[3].subtitle}</p>
        </div>

        <div className="flex-1 relative mt-10 sm:mt-0">
          <img
            src={mainContent[3].image}
            alt="main-content-img"
            className="w-full lg:w-[460px] h-[253px] lg:h-[320px] rounded-[20px] object-cover object-center"
          />
          <div className="absolute top-0 left-0 w-full lg:w-[460px] h-[253px] lg:h-[320px] rounded-[24px] take-breaks-shadow  z-10" />
        </div>
      </div>

      <div className="sm:flex items-center gap-16 lg:gap-20">
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-[32px] lg:text-5xl leading-[100%]">
            {mainContent[4].title}
          </h4>
          <p className="text-lg font-medium">{mainContent[4].subtitle}</p>
        </div>

        <div className="flex-1 mt-10 sm:mt-0">
          <img
            src={mainContent[4].image}
            alt="main-content-img"
            className="w-full lg:w-[460px] h-[235px] lgh-[320px] rounded-[20px] object-cover object-top mix-blend-multiply controller-dropshadow"
          />
        </div>
      </div>

      {/* Top and bottom gradients */}
      <div className="main-content-top-gradient absolute top-0 left-0 w-full -scale-y-[123%] sm:-scale-y-[144%] -scale-x-100" />
      <div className="main-content-bottom-gradient absolute bottom-0 left-0 w-full" />
    </div>
  );
};

export default MainContent;
