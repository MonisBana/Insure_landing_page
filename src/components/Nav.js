import React from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

function Nav(props) {
  return (
    <div className="w-100 h-20">
      <div className="container bg-white mx-auto h-full flex flex-row justify-between">
        <img src={logo} alt="logo" className="pl-5  h-5 mt-8" />
        <div className="hidden text-md lg:flex lg:items-center">
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
        <div className="flex items-center lg:hidden">
          {props.showMobNav ? (
            <button
              className="border-solid border-2 dark-violet mr-5 text-xl w-12 h-12 hover:hover-btn "
              onClick={() => props.setshowMobNav(!props.showMobNav)}
            >
              X
            </button>
          ) : (
            <img
              src={hamburger}
              alt="hamburger"
              className="w-12 h-12 mr-5 "
              onClick={() => props.setshowMobNav(!props.showMobNav)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
