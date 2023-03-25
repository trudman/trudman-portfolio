import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Banner from "./Banner";
import Project from "./Project";

const PortfolioContainer = () => {
  return (
    <main className="main-page">
      <Header />
      <Banner />
      <AboutMe />
      <Project />
      <Footer />
    </main>
  );
};

export default PortfolioContainer;
