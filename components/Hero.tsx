import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-10 pb-[52px]">
      <img
        src="/images/hero.png"
        alt="hero background image"
        className="absolute top-0 left-0 h-fit object-center -z-20"
      />
      <div className="absolute inset-0 hero-gradient -z-10" />
      <div className="container h-[70vh] grid place-items-center relative">
        {/* Nav Logo */}
        <img
          src="/images/logo.svg"
          className="absolute top-0 left-4 sm:left-10 xl:left-[108px] w-[200px]"
          alt="logo"
        />

        <div className="flex flex-col items-center">
          <h1 className="font-grozen-medical font-bold pt72 text-[56px] w-[836px] leading-[60px] text-center font-">
            <span className="text-[#E54F2E]">REVOLUTIONIZE</span> YOUR WELLNESS
            JOURNEY
          </h1>
          <h3 className="text-[28px] leading-10 mt-4 text-center w-[670px] font-medium">
            Explore immersive experiences designed to <br /> enhance your mind,
            body, and overall well-being.
          </h3>
        </div>
      </div>

      {/* Hero cards */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-[152px">
        <div className="p-4 rounded-xl blue-gradient h-[360px]">
          <div className="rounded-2xl h-[148px] bg-[#202636]" />
          <h4 className="text-2xl mt-6 text-[#07A0CF] text-center font-semibold leading-[26px] font-grozen-medical uppercase">
            Digestive Harmony
          </h4>
          <p className="text-lg leading-5 mt-4 font-medium text-center">
            Learn about the vital connection between gut health and brain
            wellness.
          </p>
        </div>

        <div className="p-4 rounded-xl orange-gradient h-[360px]">
          <div className="rounded-2xl h-[148px] bg-[#202636]" />
          <h4 className="text-2xl mt-6 text-[#E54F2E] text-center font-semibold leading-[26px] font-grozen-medical uppercase">
            STRETCH & STRENGTHEN
          </h4>
          <p className="text-lg leading-5 mt-4 font-medium text-center">
            Energize with exercises, movement, and stretching routines.
          </p>
        </div>

        <div className="p-4 rounded-xl green-gradient h-[360px]">
          <div className="rounded-2xl h-[148px] bg-[#202636]" />
          <h4 className="text-2xl mt-6 text-[#28A969] text-center font-semibold leading-[26px] font-grozen-medical uppercase">
            SMART SHOPPER
          </h4>
          <p className="text-lg leading-5 mt-4 font-medium text-center">
            Shop wisely by interpreting nutrition labels and managing sugar and
            sodium intake.
          </p>
        </div>

        <div className="p-4 rounded-xl pink-gradient h-[360px]">
          <div className="rounded-2xl h-[148px] bg-[#202636]" />
          <h4 className="text-2xl mt-6 text-[#D344B0] text-center font-semibold leading-[26px] font-grozen-medical uppercase">
            BREATHE EASY
          </h4>
          <p className="text-lg leading-5 mt-4 font-medium text-center">
            Find peace and relaxation through a calming, guided breathing
            meditation experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
