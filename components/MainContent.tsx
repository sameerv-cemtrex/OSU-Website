"use client";
import { mainContent } from "@/app/data";
import React from "react";
import { motion } from "framer-motion";

const MainContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, type: "tween" },
      }}
      viewport={{ once: true }}
      className="mx-6 min-[1440px]:container rounded-3xl bg-[#F8F3F1] px-[32px] lg:px-[86px] pt-[81px] pb-[110px] sm:py-[82px] lg:pt-[138px] lg:pb-[156px] space-y-14 sm:space-y-[104px] relative"
    >
      {/* Gettting Started */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 1, duration: 0.75, type: "tween" },
        }}
        viewport={{ once: true }}
        className="sm:flex items-center gap-16 lg:gap-20"
      >
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-[40px] lg:text-5xl leading-[100%] text-gradient-to-b">
            {mainContent[0].title}
          </h4>
          <p className="text-lg font-medium">{mainContent[0].subtitle}</p>
        </div>

        <div className="flex-1 relative mt-10 sm:mt-0">
          <motion.img
            initial={{ opacity: 0, y: 300 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, type: "tween" },
            }}
            viewport={{ once: true }}
            src={mainContent[0].image}
            alt="main-content-img"
            className="w-full xl:w-[460px] h-[235px] lg:h-[320px] rounded-[20px] object-cover object-center -scale-x-100"
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: { delay: 2.5, duration: 0.5, type: "tween" },
            }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 z-10 w-full xl:w-[460px] h-[235px] lg:h-[320px] rounded-[20px] getting-started-shadow -scale-x-100"
          />
        </div>
      </motion.div>

      {/* Clear Some Space */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 1, duration: 0.75, type: "tween" },
        }}
        viewport={{ once: true }}
        className="sm:flex flex-row-reverse items-center gap-16 lg:gap-20"
      >
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-[32px] lg:text-5xl leading-[100%] text-gradient-to-b">
            {mainContent[1].title}
          </h4>
          <p className="text-lg font-medium">{mainContent[1].subtitle}</p>
        </div>

        <div className="flex-1 relative mt-10 sm:mt-0">
          <motion.img
            initial={{ opacity: 0, y: 300 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 1, duration: 0.75, type: "tween" },
            }}
            viewport={{ once: true }}
            src={mainContent[1].image}
            alt="main-content-img"
            className="w-full lg:w-[460px] h-[253px] lg:h-[320px] rounded-[20px] object-cover object-center clear-space-shadow"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 3.5, duration: 0.3, type: "just" },
            }}
            viewport={{ once: true }}
            alt="clear space area overlay"
            src="/images/clear-space-area.svg"
            className="absolute z-10 left-[12%] sm:left-[15%] lg:left-[20%] xl:left-[15%] -bottom-[14.5px] lg:-bottom-[5%] clear-space-area"
          />
        </div>
      </motion.div>

      {/* Dress Casual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.34, duration: 0.75, type: "tween" },
        }}
        viewport={{ once: true }}
        className="sm:flex items-center gap-16 lg:gap-20"
      >
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-[32px] lg:text-5xl leading-[100%] text-gradient-to-b">
            {mainContent[2].title}
          </h4>
          <p className="text-lg font-medium">{mainContent[2].subtitle}</p>
        </div>

        <div className="flex-1 mt-20 sm:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 1, duration: 0.75, type: "tween" },
            }}
            viewport={{ once: true }}
            className="relative w-full lg:w-[460px] h-[253px] lg:h-[320px] dress-casual-shadow rounded-[20px] dress-casual-gradient"
          >
            <img
              src={mainContent[2].image}
              alt="main-content-img"
              className="h-[145%] absolute bottom-0 left-[50%] -translate-x-[50%]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Take Frequent Breaks */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.4, duration: 0.75, type: "tween" },
        }}
        viewport={{ once: true }}
        className="sm:flex flex-row-reverse items-center gap-16 lg:gap-20"
      >
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-[32px] lg:text-5xl leading-[100%] text-gradient-to-b">
            {mainContent[3].title}
          </h4>
          <p className="text-lg font-medium">{mainContent[3].subtitle}</p>
        </div>

        <div className="flex-1 relative mt-10 sm:mt-0">
          <motion.img
            initial={{ opacity: 0, y: 300 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.74, type: "just" },
            }}
            viewport={{ once: true }}
            src={mainContent[3].image}
            alt="main-content-img"
            className="w-full lg:w-[460px] h-[253px] lg:h-[320px] rounded-[20px] object-cover object-center"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 4, duration: 0.75, type: "tween" },
            }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-full lg:w-[460px] h-[253px] lg:h-[320px] rounded-[24px] take-breaks-shadow  z-10"
          />
        </div>
      </motion.div>

      {/* Using controls */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.4, duration: 0.75, type: "tween" },
        }}
        viewport={{ once: true }}
        className="sm:flex items-center gap-16 lg:gap-20"
      >
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-[32px] lg:text-5xl leading-[100%] text-gradient-to-b">
            {mainContent[4].title}
          </h4>
          <p className="text-lg font-medium">{mainContent[4].subtitle}</p>
        </div>

        <div className="flex-1 mt-10 sm:mt-0">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.5, duration: 0.75, type: "tween" },
            }}
            viewport={{ once: true }}
            src={mainContent[4].image}
            alt="main-content-img"
            className="w-full lg:w-[460px] h-[235px] lgh-[320px] rounded-[20px] object-contain object-top mix-blend-multiply controller-dropshadow"
          />
        </div>
      </motion.div>

      {/* Top and bottom gradients */}
      <div className="main-content-top-gradient absolute top-0 left-0 w-full -scale-y-[123%] sm:-scale-y-[144%] -scale-x-100" />
      <div className="main-content-bottom-gradient absolute bottom-0 left-0 w-full" />
    </motion.div>
  );
};

export default MainContent;
