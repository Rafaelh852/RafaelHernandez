import React from "react";
import Content from "../content/Home";

var Kaggle = function () {
  var cards = [];
  var project = Content.Kaggle.projects;
  for (var i = 0; i < project.length; i++) {
    cards.push(
      <li>
        <a href="#">
          <h4>{project[i].title}</h4>
        </a>
      </li>
    );
  }
  return (
    <section>
      <h3>Kaggle</h3>
      <ul>{cards}</ul>
    </section>
  );
};
export default Kaggle;
