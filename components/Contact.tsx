"use client";
import { contact } from "@/app/data";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mx-6 min-[1440px]:container relative rounded-3xl px-8 sm:px-[55px] pt-[46px] sm:pb-6 lg:p-[105px] mt-[5.5rem] lg:mt-[7.5rem] bg-gradient-to-r from-[#151B2B] via-[#151B2B] to-[#E54F2E] sm:flex items-center justify-end">
      <div className="sm:w-1/2 flex flex-col items-center sm:items-start">
        <h4 className="font-grozen-medical text-center sm:text-start text-white font-bold text-[32px] sm:text-[40px] leading-[100%]">
          {contact.title}
        </h4>

        <p className="text-lg text-white text-center sm:text-start mt-6">
          {contact.subtitle}
        </p>

        <button
          type="button"
          className="bg-[#E54F2E] mt-10 z-10 relative text-white text-lg leading-[19.8pxs] font-grozen-medical font-medium p-6 rounded-lg active:scale-95 active:bg-orange-600 ease-in-out duration-100"
        >
          CONTACT US
        </button>
      </div>

      <motion.img
        initial={{ opacity: 0, y: 300 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, type: "spring" },
        }}
        viewport={{ once: true }}
        src={contact.image}
        alt="contact-img"
        className="sm:absolute left-0 lg:left-14 bottom-0 w-[272px] h-[289px] mt-[49px] sm:mt-0 sm:h-fit sm:w-[356px] lg:w-[482px] rounded-[20px] object-cover object-center"
      />
    </div>
  );
};

export default Contact;
