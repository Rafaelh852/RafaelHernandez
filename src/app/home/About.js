import React from "react";
const { meta } = require("./site");

const About = () => {
  return (
    <section
      id="About"
      className="container-fluid  p-5  align-content-end  "
    >
      <h5 className=" pb-3 container">About</h5>

      <div className="container ">
        <h3 className="">{meta.name}</h3>
        <div className="overflow-auto">
          <span className="pr-2 font-weight-bold">Contact:</span>
          <a href="">
            <strong>{meta.email}</strong>
          </a>
        </div>
        <p>{meta.description}</p>
      </div>
    </section>
  );
};

export default About;
