import React from "react";

const MainContent = () => {
  return (
    <div className="mx-6 rounded-3xl bg-[#F8F3F1] px-[86px] pt-[138px] pb-[156px] space-y-[104px]">
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

        <div className="flex-1">
          <img
            src="/images/main-1.png"
            alt="main-content-img"
            className="w-[460px] h-[320px] rounded-[20px] object-cover object-center"
          />
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

        <div className="flex-1">
          <img
            src="/images/main-2.png"
            alt="main-content-img"
            className="w-[460px] h-[320px] rounded-[20px] object-cover object-center"
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

        <div className="flex-1 relative w-[460px] h-[320px] rounded-[20px] bg-gradient-radial to bottom from-[#F7F2F0]  to-[#E54F2E]">
          <img
            src="/images/main-3.png"
            alt="main-content-img"
            className="h-[145%] w-55%] absolute bottom-0 left-[22%]"
          />
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

        <div className="flex-1">
          <img
            src="/images/main-4.png"
            alt="main-content-img"
            className="w-[460px] h-[320px] rounded-[20px] object-cover object-center"
          />
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
            className="w-[460px] h-[320px] rounded-[20px] object-cover object-top mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
