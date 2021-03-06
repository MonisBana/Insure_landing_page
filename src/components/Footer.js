import React from "react";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import insta from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
function Footer() {
  return (
    <div className="w-full footer bg-footer-pattern-mob lg:bg-footer-pattern bg-no-repeat bg-top-left">
      <div className="container mx-auto mt-20 p-20">
        <div className="flex lg:flex-row  flex-col justify-between items-center">
          <img src={logo} alt="logo" className="h-5" />
          <div className="flex flex-row items-center mt-8 lg:mt-0">
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="icon-facebook" className="ml-3" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={insta} alt="icon-instagram" className="ml-3" />
            </a>
            <a href="https://twitter.com/">
              <img src={twitter} alt="icon-twitter" className="ml-3" />
            </a>
            <a href="https://www.pinterest.com/">
              <img src={pinterest} alt="icon-pinterest" className="ml-3" />
            </a>
          </div>
        </div>
        <div className="bg-dark-violet w-full h-0.5 opacity-20 mt-16"></div>
        <div className="flex flex-col lg:flex-row mt-16 items-start uppercase text-center font-semibold ">
          <div className="w-full lg:w-3/12">
            <p className="footer-title mt-8 lg:mt-0">Our company</p>
            <div className="mt-8">
              <p className="mb-2 opacity-80 hover:underline">How we work</p>

              <p className="mb-2 opacity-80 hover:underline">Why Insure?</p>

              <p className="mb-2 opacity-80 hover:underline">View plans</p>

              <p className="mb-2 opacity-80 hover:underline">Reviews</p>
            </div>
          </div>
          <div className="w-full lg:w-3/12">
            <p className="footer-title mt-8 lg:mt-0">Help me</p>
            <div className="mt-8">
              <p className="mb-2 opacity-80 hover:underline">FAQ</p>

              <p className="mb-2 opacity-80 hover:underline">Terms of use</p>

              <p className="mb-2 opacity-80 hover:underline">Privacy policy</p>

              <p className="mb-2 opacity-80 hover:underline">Cookies</p>
            </div>
          </div>
          <div className="w-full lg:w-3/12">
            <p className="footer-title mt-8 lg:mt-0">Contact</p>
            <div className="mt-8">
              <p className="mb-2 opacity-80 hover:underline">Sales</p>

              <p className="mb-2 opacity-80 hover:underline">Support</p>

              <p className="mb-2 opacity-80 hover:underline">Live chat</p>
            </div>
          </div>
          <div className="w-full lg:w-3/12">
            <p className="footer-title mt-8 lg:mt-0">Others</p>
            <div className="mt-8">
              <p className="mb-2 opacity-80 hover:underline">Careers</p>

              <p className="mb-2 opacity-80 hover:underline">Press</p>

              <p className="mb-2 opacity-80 hover:underline">Licenses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
