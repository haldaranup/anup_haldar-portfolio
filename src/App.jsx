import React from "react";
import { useState } from "react";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Top from "./components/top/Top";
import Footer from "./components/footer/Footer";


import "./app.scss";



function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app">
      <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <div className="sections">
        <Intro />
        <Top />
        <About />
        <Portfolio />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
