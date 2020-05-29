import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./components/App";//
//import * as serviceWorker from "./serviceWorker";

import Nav from "./comps/layout/Nav";
import Header from "./comps/layout/Header";
import Body from "./comps/layout/Body";
import Footer from "./comps/layout/Footer";


var site = {
  abre: "RH",
  name: "Rafael Hernandez",
  title: "Roscuspace",
  url: "https://roscuspace.com",
  links: {
    github: "",
    linkedin: "",
    twitter: "",
    kaggle: "",
    medium: "",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Nav props={site} />
    <Header props={site} />
    <Body props={site} />
    <Footer props={site} />
  </React.StrictMode>,
  document.getElementById("root")
)