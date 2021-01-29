import React from "react";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import insta from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
function Footer() {
  return (
    <div className="w-full footer">
      <div className="container mx-auto mt-20 p-20">
        <div className="flex flex-row justify-between items-center">
          <img src={logo} alt="logo" className="h-5" />
          <div className="flex flex-row items-center">
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
        <div className="flex flex-row mt-16 items-start uppercase ">
          <div className="w-3/12">
            <p className="footer-title">Our company</p>
            <div className="mt-8">
              <a>
                <p className="hover:underline">How we work</p>
              </a>
              <a>
                <p className="hover:underline">Why Insure?</p>
              </a>
              <a>
                <p className="hover:underline">View plans</p>
              </a>
              <a>
                <p className="hover:underline">Reviews</p>
              </a>
            </div>
          </div>
          <div className="w-3/12">
            <p className="footer-title">Help me</p>
            <div className="mt-8">
              <a>
                <p className="hover:underline">FAQ</p>
              </a>
              <a>
                <p className="hover:underline">Terms of use</p>
              </a>
              <a>
                <p className="hover:underline">Privacy policy</p>
              </a>
              <a>
                <p className="hover:underline">Cookies</p>
              </a>
            </div>
          </div>
          <div className="w-3/12">
            <p className="footer-title">Contact</p>
            <div className="mt-8">
              <a>
                <p className="hover:underline">Sales</p>
              </a>
              <a>
                <p className="hover:underline">Support</p>
              </a>
              <a>
                <p className="hover:underline">Live chat</p>
              </a>
            </div>
          </div>
          <div className="w-3/12">
            <p className="footer-title">Others</p>
            <div className="mt-8">
              <a>
                <p className="hover:underline">Careers</p>
              </a>
              <a>
                <p className="hover:underline">Press</p>
              </a>
              <a>
                <p className="hover:underline">Licenses</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
