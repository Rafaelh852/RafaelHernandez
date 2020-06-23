import React from "react";
const { skill } = require("../content/skills");

const Skills = () => {
  return (
    <section id="Skills" className="container-fluid bg-light  p-5">
      <h3 className=" pb-3 container ">Skills</h3>
      <div className="container p-0 m-auto">
        {skill.map((skill) => (
          <div className=" bg-light d-inline-block col-12 col-md-6 col-lg-4 col-xl-4 ">
            <h4 className="card-title ">{skill.name}</h4>
            <p className="card-text">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
