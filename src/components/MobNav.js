import React from "react";

function MobNav() {
  return (
    <div className="flex flex-col very-dark-violet h-screen text-center z-20  text-white overflow-hidden relative lg:hidden">
      <a
        href="https://github.com/MonisBana"
        className="opacity-60 text-2xl mt-6 "
      >
        HOW WE WORK
      </a>
      <a
        href="https://github.com/MonisBana"
        className="opacity-60 text-2xl mt-6 "
      >
        BLOG
      </a>
      <a
        href="https://github.com/MonisBana"
        className="opacity-60 text-2xl mt-6 "
      >
        ACCOUNT
      </a>
      <button className="border-solid border-2 border-white text-white mx-4  text-2xl mt-6  opacity-60 px-5 py-1 ">
        VIEW PLANS
      </button>
    </div>
  );
}

export default MobNav;
