import React from "react";
import Content from "../content/Home";

var Kaggle = function () {
  var cards = [];
  var project = Content.Kaggle.projects;
  for (var i = 0; i < project.length; i++) {
    cards.push(
      <div className="card card-body bg-light border-0 d-inline-flex col-md-4">
        <a href="#" className="text-secondary">
          <h4>{project[i].title}</h4>
        </a>
      </div>
    );
  }
  return (
    <section id="Kaggle" className="container-fluid ">
      <h3 className="container pb-3">Kaggle</h3>
      <div className="container">{cards}</div>
    </section>
  );
};
export default Kaggle;
