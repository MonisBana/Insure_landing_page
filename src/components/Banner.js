import React from "react";

function Banner() {
  return (
    <div className="lg:container  lg:mx-auto mx-12 bg-dark-violet bg-how-we-work-pattern-mob lg:bg-how-we-work-pattern bg-no-repeat bg-right-top header mt-48 text-centerlg text-left">
      <div className="flex flex-col lg:flex-row justify-around items-center p-4 lg:p-12">
        <p className="text-3xl px-2 py-4 lg:text-6xl header-font w-full mt-14 lg:mt-0 lg:w-7/12">
          Find out more about how we work
        </p>
        <button className="border-white border-2 w-32 px-3 py-1 mb-14 lg:mb-0 text-md mt-4 lg:mt-0  hover:hover-invert-btn">
          How we work
        </button>
      </div>
    </div>
  );
}

export default Banner;
