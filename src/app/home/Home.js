import React from "react";
import { Fragment } from "react";

import Nav from "../comps/Nav";
import Footer from "../comps/Footer";

import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Articles from "./Articles";
import Contact from "./Contact";

const { HomeNav } = require("./site.json");

const Home = ({ style }) => {
  return (
    <Fragment>
      <Nav nav={HomeNav} />

      <div className={style.wrapper}>
        <Header />
        <About />
        <Projects />
        <Articles />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
