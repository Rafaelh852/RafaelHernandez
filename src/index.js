import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./comps/layout/Layout";

var site = {
  abre: "RH",
  name: "Rafael Hernandez",
  title: "Rafael H.",
  url: "https://rafaelhernandez.dev/",
  slogan:"Data Scientist with a passion for teaching",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quaerat perspiciatis reprehenderit neque illo aspernatur, incidunt dignissimos. Architecto, accusantium. Enim.",
  links: {
    Home:"#",
    github: "https://github.com/rafaelh852",
    linkedin: "https://www.linkedin.com/in/rafael-hernandez-54a667102/",
    twitter: "https://twitter.com/rafaelh852",
    kaggle: "https://www.kaggle.com/rafaelh852",
    medium: null,
  },
};

ReactDOM.render(<Layout props={site} />, document.getElementById("root"));
