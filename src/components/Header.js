import React from "react";
import fam_pic from "../assets/images/image-intro-desktop.jpg";
import bg_pattern_right from "../assets/images/bg-pattern-intro-right-desktop.svg";
import bg_pattern_left from "../assets/images/bg-pattern-intro-left-desktop.svg";
function Header() {
  return (
    <div className="bg-dark-violet header">
      <img
        src={bg_pattern_right}
        alt="bg-pattern-right"
        className="absolute right-0 w-96 h-96"
      />
      <div className="container mx-auto flex flex-row">
        <div className="flex flex-col w-1/2 flex-wrap ">
          <div className="w-32 h-0.5 bg-white opacity-40 mt-16"></div>
          <p className="text-7xl header-font mt-12">
            Humanizing your insurance.
          </p>
          <p className="text-md opacity-80 mt-4">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className="border-white border-2 w-32 px-3 py-1 text-md mt-4 hover:hover-invert-btn">
            VIEW PLANS
          </button>
        </div>
        <div className="flex">
          <img src={fam_pic} alt="fam pic" className="-mb-40 mt-16" />
        </div>
      </div>
      <img
        src={bg_pattern_left}
        alt="bg-pattern-left"
        className="absolute bottom-0 left-0 -mb-18"
      />
    </div>
  );
}

export default Header;
