import React from "react";
import Content from "../content/Home";

var Skills = function () {
  var cards = [];
  for (var i = 0; i < Content.Skills.length; i++) {
    cards.push(
      <div className=" card card-body col-md-4 d-inline-flex ">
  
        <h4 className="card-title">{Content.Skills[i].name}</h4>
        <p className="card-text">{Content.Skills[i].description}</p>
      </div>
    );
  }
  return (
    <section className="container-fluid p-5 ">
      <h3 className=" pb-3 container ">Skills</h3>
      <div className="container">{cards}</div>
    </section>
  );
};

export default Skills;
