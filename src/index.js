import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./comps/layout/Layout";

var site = {
  abre: "RH",
  name: "Rafael Hernandez",
  title: "Roscuspace",
  url: "https://roscuspace.com",
  links: {
    github: "https://github.com/roscu",
    linkedin: "https://www.linkedin.com/in/rafael-hernandez-54a667102/",
    twitter: "https://twitter.com/rafaelh852",
    kaggle: "https://www.kaggle.com/roscuspace",
    medium: null,
  },
};

ReactDOM.render(<Layout props={site} />, document.getElementById("root"));
