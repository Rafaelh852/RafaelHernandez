import React from "react";
import Content from "../content/Home";

var Projects = function () {
  var cards = [];
  var project = Content.Projects.project;
  for (var i = 0; i < project.length; i++) {
    cards.push(
      <div className=" bg-light d-inline-block col-12 col-lg-6 col-xl-4 ">
        <h4 className="card-title">{project[i].title} </h4>
        <a href="#">
          <img src="#" alt="gif of project 1" />
        </a>
        <p className="card-text">{project[i].description}</p>
      </div>
    );
  }

  return (
    <section id="Projects" className="container-fluid p-5 bg-secondary bg-light">
      <h3 className=" pb-3 container">Projects</h3>
      <div className=" container p-0 m-auto">{cards}</div>
    </section>
  );
};

export default Projects;
