import React from "react";
import logo from "../assets/images/logo.svg";
function Nav() {
  return (
    <div className="w-100 h-20">
      <div className="container bg-white mx-auto h-full flex flex-row justify-between">
        <img src={logo} alt="logo" className="pl-5  h-5 mt-8" />
        <div className="text-md flex items-center">
          <a
            href="https://github.com/MonisBana"
            className="ml-6 opacity-60 hover:opacity-100"
          >
            HOW WE WORK
          </a>
          <a
            href="https://github.com/MonisBana"
            className="ml-6 opacity-60 hover:opacity-100"
          >
            BLOG
          </a>
          <a
            href="https://github.com/MonisBana"
            className="ml-6 opacity-60 hover:opacity-100"
          >
            ACCOUNT
          </a>
          <button className="border-solid border-2 dark-violet ml-6 px-5 py-1 hover:hover-btn">
            VIEW PLANS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
