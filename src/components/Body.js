import React from "react";
import snappy_process from "../assets/images/icon-snappy-process.svg";
import affordable_prices from "../assets/images/icon-affordable-prices.svg";
import people_first from "../assets/images/icon-people-first.svg";

function Body() {
  return (
    <div className="w-full mt-48">
      <div className="container mx-auto">
        <div className="flex flex-col w-full flex-wrap ">
          <div className="bg-dark-violet w-32 h-0.5 opacity-20 mt-16"></div>
          <p className="text-6xl header-font mt-16">We’re different</p>
          <div className="mt-12 flex flex-row justify-between">
            <div className="flex flex-col">
              <img
                src={snappy_process}
                alt="icon-snappy-process"
                className="w-20 h-20"
              />
              <p className="header-font dark-violet text-xl mt-4">
                Snappy Process
              </p>
              <p className="opacity-80 mt-4 text-lg pr-24">
                Our application process can be completed in minutes, not hours.
                Don’t get stuck filling in tedious forms.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src={affordable_prices}
                alt="icon-affordable-prices"
                className="w-20 h-20"
              />
              <p className="header-font dark-violet text-xl mt-4">
                Affordable Prices
              </p>
              <p className="opacity-80 mt-4 text-lg pr-24">
                We don’t want you worrying about high monthly costs. Our prices
                may be low, but we still offer the best coverage possible.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src={people_first}
                alt="icon-people-first"
                className="w-20 h-20"
              />
              <p className="header-font dark-violet text-xl mt-4 ">
                People First
              </p>
              <p className="opacity-80 mt-4 text-lg pr-24">
                Our plans aren’t full of conditions and clauses to prevent
                payouts. We make sure you’re covered when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
