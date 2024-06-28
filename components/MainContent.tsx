import React from "react";

const MainContent = () => {
  return (
    <div className="mx-6 min-[1440px]:container rounded-3xl bg-[#F8F3F1] px-[86px] pt-[138px] pb-[156px] space-y-[104px] relative">
      <div className="flex items-center gap-20">
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-5xl leading-[100%]">
            GETTING STARTED
          </h4>
          <p className="text-lg font-medium">
            Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
            Proin porta est convallis lacus bl
          </p>
        </div>

        <div className="flex-1 relative">
          <img
            src="/images/main-1.png"
            alt="main-content-img"
            className="w-[460px] h-[320px] rounded-[20px] object-cover object-center -scale-x-100"
          />
          <div className="absolute top-0 left-0 z-10 w-[460px] h-[320px] rounded-[20px] getting-started-shadow -scale-x-100" />
        </div>
      </div>

      <div className="flex flex-row-reverse items-center gap-20">
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-5xl leading-[100%]">
            CLEAR SOME SPACE
          </h4>
          <p className="text-lg font-medium">
            Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce
            dignissim luctus sem eu dapibus. P
          </p>
        </div>

        <div className="flex-1 relative">
          <img
            src="/images/main-2.png"
            alt="main-content-img"
            className="w-[460px] h-[320px] rounded-[20px] object-cover object-center clear-space-shadow"
          />
          <img
            alt="clear space area overlay"
            src="/images/clear-space-area.svg"
            className="absolute z-10 left-[100px] -bottom-[40.5px] clear-space-area"
          />
        </div>
      </div>

      <div className="flex items-center gap-20">
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-5xl leading-[100%]">
            DRESS CASUAL
          </h4>
          <p className="text-lg font-medium">
            Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.
            Morbi in orci risus. Donec pretium f.
          </p>
        </div>

        <div className="flex-1">
          <div className="relative w-[460px] h-[320px] dress-casual-shadow rounded-[20px] bg-gradient-radial to bottom from-[#F7F2F0]  to-[#E54F2E]">
            <img
              src="/images/main-3.png"
              alt="main-content-img"
              className="h-[145%] w-55%] absolute bottom-0 left-[50%] -translate-x-[50%]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center gap-20">
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-5xl leading-[100%]">
            TAKE FREQUENT BREAKS
          </h4>
          <p className="text-lg font-medium">
            In a laoreet purus. Integer turpis quam, laoreet id orci nec,
            ultrices lacinia nunc. Aliquam erat vo
          </p>
        </div>

        <div className="flex-1 relative">
          <img
            src="/images/main-4.png"
            alt="main-content-img"
            className="w-[460px] h-[320px] rounded-[20px] object-cover object-center"
          />
          <div className="absolute top-0 left-0 w-[460px] h-[320px] rounded-[24px] take-breaks-shadow  z-10" />
        </div>
      </div>

      <div className="flex items-center gap-20">
        <div className="flex-1 space-y-6">
          <h4 className="font-grozen-medical font-bold text-5xl leading-[100%]">
            USING THE CONTROLS
          </h4>
          <p className="text-lg font-medium">
            Aliquam porta nisl dolor, molestie pellentesque elit molestie in.
            Morbi metus neque, elementum ullam
          </p>
        </div>

        <div className="flex-1">
          <img
            src="/images/controller.png"
            alt="main-content-img"
            className="w-[460px] h-[320px] rounded-[20px] object-cover object-top mix-blend-multiply controller-dropshadow"
          />
        </div>
      </div>

      {/* Top and bottom gradients */}
      <div className="main-content-top-gradient absolute top-0 left-0 w-full -scale-y-[144%] -scale-x-100" />
      <div className="main-content-bottom-gradient absolute bottom-0 left-0 w-full" />
    </div>
  );
};

export default MainContent;
