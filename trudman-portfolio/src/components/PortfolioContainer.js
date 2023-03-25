import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Banner from "./Banner";

const PortfolioContainer = () => {
  return (
    <main className="main-page">
      <Header />
      <Banner />
      <AboutMe />
      <Footer />
    </main>
  );
};

export default PortfolioContainer;
