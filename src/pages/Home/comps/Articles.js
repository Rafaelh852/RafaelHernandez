import React from "react";
import Content from "../content/Home";

var Articles = function () {
  var articles = [];
  var article = Content.Aritcles.article;

  for (var i = 0; i < article.length; i++) {
    articles.push(
      <li>
        <h4>{article[i].title}</h4>
        <h6>{article[i].description}</h6>
      </li>
    );
  }
  return (
    <section className="container">
      <h3> Articles </h3>
      <ul>{articles}</ul>
    </section>
  );
};

export default Articles;
