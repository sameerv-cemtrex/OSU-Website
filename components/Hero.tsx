"use client";
import { heroCards, heroBanner } from "@/app/data";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import parse from "html-react-parser";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const subHeadingY = useTransform(scrollYProgress, [0, 1], ["0%", "-19%"]);

  return (
    <div ref={ref} className="min-h-screen pt-8 sm:pt-10 sm:pb-[52px]">
      <motion.img
        style={{ y: imageY }}
        src={heroBanner.heroImage}
        alt="hero background image"
        className="absolute top-0 left-0 h-[646px] sm:h-fit w-full object-cover object-center -z-20 hero-gradient"
      />

      <div className="container lg:px-[6.75rem]  h-[60vh] sm:h-[55vh] lg:h-[70vh] grid place-items-center relative">
        {/* Nav Logo */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.75, delay: 1.2, type: "just" },
          }}
          src={heroBanner.logo}
          className="absolute top-0 left-4 sm:left-10 xl:left-[108px] w-1/2 sm:w-[200px]"
          alt="logo"
        />

        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            style={{ y: headingY }}
            animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.75 } }}
            className="font-grozen-medical font-bold text-[32px] leading-[38px] sm:text-5xl lg:text-[56px] lg:w-[70vw] 2xl:w-[60vw] sm:leading-[60px] text-center text-gradient-to-r"
          >
            {parse(heroBanner.title)}
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.75 } }}
            style={{ y: subHeadingY }}
            className="sm:block hidden text-lg sm:text-[28px] leading-[26px] sm:leading-10 mt-4 text-center lg:w-[670px] font-medium"
          >
            {parse(heroBanner.subtitleWithBreak)}
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.75 } }}
            className="sm:hidden text-lg leading-[26px] mt-4 text-center w-[90vw] font-medium"
          >
            {heroBanner.subtitle}
          </motion.h3>
        </div>
      </div>

      {/* Hero cards */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, type: "just", delay: 1.8 },
        }}
        viewport={{ once: true }}
        className="container px-5 xl:px-[6.75rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {heroCards.map((card, index) => (
          <div
            key={index}
            className={cn(
              "p-4 rounded-xl h-full min-h-[360px]",
              `${card.colorOverlay[0]}-gradient`
            )}
          >
            <div className="rounded-2xl h-[148px] bg-[#202636]" />
            <h4
              className={cn(
                "text-2xl mt-6 text-center font-semibold leading-[26px] font-grozen-medical uppercase ",
                card.colorOverlay[1]
              )}
              // style={{ color: `var(--primary-${card.colorOverlay[0]})` }}
            >
              {card.title}
            </h4>
            <p className="text-lg leading-5 mt-4 font-medium text-center">
              {card.subtitle}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
