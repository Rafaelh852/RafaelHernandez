import React, { useState } from "react";
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
import Challenges from "./Challenges";

const { HomeNav } = require("./site.json");

const Home = () => {
  return (
    <Fragment>
      <Nav navs={[HomeNav]} />
      <div
        id="content"
        className="container-fluid p-0 bg-dark text-primary "
      >
        <Header />
        <About />
        <Projects />
       <Challenges />
        <Contact />
      </div>
    </Fragment>
  );
};
//<Footer /> <Nav nav={HomeNav} />
export default Home;
