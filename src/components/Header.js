import React from "react";
import fam_pic from "../assets/images/image-intro-desktop.jpg";
import fam_pic_mob from "../assets/images/image-intro-mobile.jpg";
import bg_pattern_right from "../assets/images/bg-pattern-intro-right-desktop.svg";
import bg_pattern_right_mob from "../assets/images/bg-pattern-intro-right-mobile.svg";
import bg_pattern_left from "../assets/images/bg-pattern-intro-left-desktop.svg";
import bg_pattern_left_mob from "../assets/images/bg-pattern-intro-left-mobile.svg";
function Header() {
  return (
    <div className="bg-dark-violet header">
      <img
        src={bg_pattern_right}
        alt="bg-pattern-right"
        className="absolute right-0 w-96 h-96 hidden lg:block"
      />

      <div className="container mx-auto flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col  w-full lg:w-1/2 flex-wrap  items-center lg:items-start text-center lg:text-left px-4 lg:px-0">
          <div className="w-32 h-0.5 bg-white hidden lg:block opacity-40 mt-16"></div>
          <p className="text-5xl lg:text-7xl header-font mt-12">
            Humanizing your insurance.
          </p>
          <p className="text-md opacity-80 mt-4">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className="border-white border-2 w-32 px-3 py-1 text-md mt-4 mb-28 hover:hover-invert-btn">
            VIEW PLANS
          </button>
        </div>
        <div className="hidden lg:flex">
          <img src={fam_pic} alt="fam pic" className="-mb-40 mt-16" />
        </div>
        <div className="flex lg:hidden">
          <img src={fam_pic_mob} alt="fam pic" className="z-10 w-full" />
        </div>
        <img
          src={bg_pattern_right_mob}
          alt="bg-pattern-right"
          className="absolute botttom-0 right-0  -mb-44 lg:hidden"
        />
      </div>

      <img
        src={bg_pattern_left}
        alt="bg-pattern-left"
        className="absolute top-96 left-0 -mb-18 hidden lg:block"
      />
      <img
        src={bg_pattern_left_mob}
        alt="bg-pattern-left"
        className="absolute top-2/3 left-0 left-pattern lg:hidden"
      />
    </div>
  );
}

export default Header;
