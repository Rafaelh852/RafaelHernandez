import React from "react";
import Content from "../content/Home";

var About = function () {
  return (
    <section id="About" className="container-fluid  p-5 bg-dark text-light">
      <h3 className=" pb-3 container ">About</h3>

      <div className="container ">
        <h4 className="">{Content.name}</h4>
        <div className="">
          <span className="pr-2 font-weight-bold">Contact:</span>
          <a href="">
            <strong>{Content.email}</strong>
          </a>
        </div>
        <p>{Content.description}</p>
      </div>
    </section>
  );
};

export default About;
