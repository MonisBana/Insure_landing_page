import React from "react";

function Banner() {
  return (
    <div className="container mx-auto bg-dark-violet bg-how-we-work-pattern bg-no-repeat bg-right-top header mt-48">
      <div className="flex flex-row justify-around items-center p-12">
        <p className="text-6xl header-font w-7/12">
          Find out more <br />
          about how we work
        </p>
        <button className="border-white border-2 w-32 px-3 py-1 text-md mt-4">
          How we work
        </button>
      </div>
    </div>
  );
}

export default Banner;
