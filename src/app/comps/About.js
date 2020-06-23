import React from "react";
const { meta } = require("../content/site");

const About = () => {
  return (
    <section id="About" className="container-fluid  p-5 bg-dark text-light">
      <h3 className=" pb-3 container ">About</h3>

      <div className="container ">
        <h4 className="">{meta.name}</h4>
        <div className="">
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
