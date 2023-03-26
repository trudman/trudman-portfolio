import React from "react";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Banner />
        <Routes>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
