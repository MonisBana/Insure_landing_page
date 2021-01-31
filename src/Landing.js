import React, { Fragment, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Banner from "./components/Banner";
import MobNav from "./components/MobNav";

function Landing() {
  const [showMobNav, setshowMobNav] = useState(false);
  return (
    <div>
      <Nav showMobNav={showMobNav} setshowMobNav={setshowMobNav} />
      {showMobNav ? (
        <MobNav />
      ) : (
        <Fragment>
          <Header />
          <Body />
          <Banner />
          <Footer />
        </Fragment>
      )}
    </div>
  );
}

export default Landing;
