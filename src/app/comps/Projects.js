import React from "react";
const { project, link } = require("../content/projects");

const Projects = function () {
  return (
    <section
      id="Projects"
      className="container-fluid p-5 bg-secondary bg-light"
    >
      <h3 className=" pb-3 container">Projects</h3>
      <div className=" container p-0 m-auto">
        {project.map((project) => (
          <div className=" bg-light d-inline-block col-12 col-lg-6 col-xl-4 ">
            <h4 className="card-title">{project.title} </h4>
            <a href="#">
              <img src="#" alt="gif of project 1" />
            </a>
            <p className="card-text">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
