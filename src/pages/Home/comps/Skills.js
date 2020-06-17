import React from "react";
import Content from "../content/Home";

var Skills = function () {
  var cards = [];
  for (var i = 0; i < Content.Skills.length; i++) {
    cards.push(
      <li>
        <h4>{Content.Skills[i].name}</h4>
        <h6>{Content.Skills[i].description}</h6>
      </li>
    );
  }
  return (
    <section className="container">
      <h3>skills</h3>
      <ul>{cards}</ul>
    </section>
  );
};

export default Skills;
