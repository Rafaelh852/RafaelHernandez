import React from "react";
import Content from "../content/Home";

var Projects = function () {
  var cards = [];
  var project = Content.Projects.project;
  for (var i = 0; i < project.length; i++) {
    cards.push(
      <li>
        <h4>{project[i].title} </h4>
        <a href="#">
          <img src="#" alt="gif of project 1" />
        </a>
        <h6>{project[i].description}</h6>
      </li>
    );
  }

  return <section className="container">{cards}</section>;
};

export default Projects;
