import React, { Component } from "react";

import Nav from "./comps/Nav";
import Header from "./comps/Header";
import About from "./comps/About";
import Skills from "./comps/Skills";
import Projects from "./comps/Projects";
import Kaggle from "./comps/Kaggle";
import Articles from "./comps/Articles";
import Footer from "./comps/Footer";

//functions
//nav
//header
//about  ..
//skills .. short
//projects .. preview on hosted and branded data
//kaggle .. serious competitions and performance
//medium articles about projects and kaggle experience
//videos on how to that are documented for yourserlf and others
/* note this can be replaced by medium sololy or maybe youtube */
//contact/footer

export default class Layout extends Component {
  render() {
    return (
      <React.StrictMode>
        <Nav />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Kaggle />
        <Articles />
        <Footer />
      </React.StrictMode>
    );
  }
}
