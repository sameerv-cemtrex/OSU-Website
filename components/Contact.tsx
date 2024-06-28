import React from "react";

const Contact = () => {
  return (
    <div className="mx-6 min-[1440px]:container relative rounded-3xl px-[55px] pt-[46px] pb-6 lg:p-[105px] mt-[5.5rem] lg:mt-[7.5rem] bg-gradient-to-r from-[#151B2B] via-[#151B2B] to-[#E54F2E] flex items-center justify-end">
      <img
        src="/images/contact.png"
        alt="contact-img"
        className="absolute -left-24 lg:-left-10 bottom-0 w-[83%] lg:w-[60%] -scale-x-100 mirror rounded-[20px] object-cover object-center"
      />
      <div className="w-1/2">
        <h4 className="font-grozen-medical text-white font-bold text-[40px] leading-[100%]">
          NEED HELP?
        </h4>

        <p className="text-lg text-white mt-6">
          Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce
          dignissim luctus sem eu dapibus.
        </p>

        <button
          type="button"
          className="bg-[#E54F2E] mt-10 z-10 relative text-white text-lg leading-[19.8pxs] font-grozen-medical font-medium p-6 rounded-lg active:scale-95 active:bg-orange-600 ease-in-out duration-100"
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Contact;
