import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Banner from "./components/Banner";

function Landing() {
  return (
    <div>
      <Nav />
      <Header />
      <Body />
      <Banner />
      <Footer />
    </div>
  );
}

export default Landing;
