import React, { Component } from "react";
import axios from "axios";

import Nav from "./comps/Nav";
import Header from "./comps/Header";
import About from "./comps/About";
import Skills from "./comps/Skills";
import Projects from "./comps/Projects";
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

export default class App extends Component {
  async componentDidMount() {
    const url = "https://medium.com/feed/@rafael.hernandez852";
    const res = await axios.get(url);
    console.log(res);
  }

  render() {
    return (
      <React.StrictMode>
        <Nav />

        <Header />
        <About />
        <Projects />
        <hr />
        <Articles />
        <Skills />

        <Footer />
      </React.StrictMode>
    );
  }
}
