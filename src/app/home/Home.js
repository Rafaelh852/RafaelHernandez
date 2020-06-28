import React from "react";
import { Fragment } from "react";

import Nav from "../comps/Nav";

import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Articles from "./Articles";
import Footer from "./Footer";

const { HomeNav } = require("./site.json");

const Home = ({ style }) => {
  return (
    <Fragment>
      <Nav nav={HomeNav} />
      <div className={style.section}>
        <Header />
        <About />
        <Projects />
        <hr />
        <Articles />
        <Skills />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
