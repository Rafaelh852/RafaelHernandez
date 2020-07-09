import React from "react";
import { Fragment } from "react";

import { useSpring, animated } from "react-spring";
import { Transition, Spring } from "react-spring/renderprops";

import Nav from "../comps/Nav";
import Footer from "../comps/Footer";

import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Articles from "./Articles";
import Contact from "./Contact";

const { HomeNav, media } = require("./site.json");

const Home = () => {
  const mediaNav = Object.entries(media).map(([name, link]) => ({
    link,
    heading: name,
  }));

  const nav1 = <Nav nav={HomeNav} />;
  const nav2 = <Nav nav={mediaNav} />;

  return (
    <Fragment>
      {nav1}
      
      <div className="container-fluid p-0">
        <Header />
        <About />
        <Projects />
        <Articles />
        <Skills />
        <Contact />
      </div>
    </Fragment>
  );
};
//<Footer /> <Nav nav={HomeNav} />
export default Home;
