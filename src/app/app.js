import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home/Home.js";
import About from "./about/About.js";
import Projects from "./projects/Projects.js";
import Articles from "./articles/Articles.js";
import Contact from "./comps/ContactForm.js";

//functions
//nav
//header
//about  ..
//skills .. short
//projects .. prepageDisplay on hosted and branded data
//kaggle .. serious competitions and performance
//medium articles about projects and kaggle experience
//videos on how to that are documented for yourserlf and others
/* note this can be replaced by medium sololy or maybe youtube */
//contact/footer

var App = () => {
  //default styling for pages
  // leave spaces at the ends to allow concats

  const pageStyle = {
    section: "container-fluid",
    h3: "  ",
    p: "  ",
    link: "  ",
    img: "  ",
  };

  const HomePage = () => <Home style={pageStyle} />;
  const AboutPage = () => <About style={pageStyle} />;
  const ProjectsPage = () => <Projects style={pageStyle} />;
  const ArticlesPage = () => <Articles style={pageStyle} />;
  const ContactPage = () => <Contact style={pageStyle} />;

  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/index" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/articles" component={ArticlesPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default App;
