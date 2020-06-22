import React from "react";
import Content from "../content/Home";

var Skills = function () {
  var cards = [];
  for (var i = 0; i < Content.Skills.length; i++) {
    cards.push(
      <div className=" bg-light d-inline-block col-12 col-md-6 col-lg-4 col-xl-4 ">
        <h4 className="card-title ">{Content.Skills[i].name}</h4>
        <p className="card-text">{Content.Skills[i].description}</p>
      </div>
    );
  }
  return (
    <section id="Skills" className="container-fluid bg-light  p-5">
      <h3 className=" pb-3 container ">Skills</h3>
      <div className="container p-0 m-auto">{cards}</div>
    </section>
  );
};

export default Skills;
