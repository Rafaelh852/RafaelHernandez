import React from "react";
import Content from "../content/Home";

var Projects = function () {
  var cards = [];
  var project = Content.Projects.project;
  for (var i = 0; i < project.length; i++) {
    cards.push(
      <div className=" card card-body d-inline-flex bg-light border-0 col-md-4 ">
        <h4 className="">{project[i].title} </h4>
        <a href="#">
          <img src="#" alt="gif of project 1" />
        </a>
        <p>{project[i].description}</p>
      </div>
    );
  }

  return (
    <section className="container-fluid p-5">
      <h3 className=" pb-3 container ">Projects</h3>
      <div className="container">{cards}</div>
    </section>
  );
};

export default Projects;
