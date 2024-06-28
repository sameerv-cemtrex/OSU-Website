import React from "react";

const FindPhysician = () => {
  return (
    <div className="pt-[142px] pb-[90px] bg-white">
      <div className="container h-full flex items-center gap-[170px]">
        <div className="w-[42%]">
          <h4 className="text-[40px] font-bold font-grozen-medical leading-10 ">
            FIND A PRIMARY CARE PHYSICIAN
          </h4>
          <p className="mt-6 text-lg font-normal leading-[150%]">
            Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce
            dignissim luctus sem eu dapibus.
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
              Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.{" "}
              <a
                href="#"
                className="text-[#E54F2E] underline underline-offset-2"
              >
                Go to Website
              </a>
            </p>
          </div>

          <div className="bg-[#F8F3F1] rounded p-3 mt-2">
            <p className="font-medium">
              Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.{" "}
              <a
                href="#"
                className="text-[#E54F2E] underline underline-offset-2"
              >
                Go to Website
              </a>
            </p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-3 grid-row-3">
          <img
            alt="physician 1 "
            src="/images/physician1.png"
            className="w-[340px] h-[289px] rounded-[20px] row-span-2 row-start-1 col-span-2 col-start-2 object-cover object-center shadow-2xl shadow-black/50"
          />
          <img
            alt="physician 2 "
            src="/images/physician2.png"
            className=" z-20 w-[340px] h-[289px] rounded-[20px] row-span-2 row-start-2 col-span-2 col-start-1 object-cover object-center shadow-2xl shadow-black/50"
          />
        </div>
      </div>
    </div>
  );
};

export default FindPhysician;
