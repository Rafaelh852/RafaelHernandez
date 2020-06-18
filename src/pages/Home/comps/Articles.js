import React from "react";
import Content from "../content/Home";

var Articles = function () {
  var articles = [];
  var article = Content.Aritcles.article;

  for (var i = 0; i < article.length; i++) {
    articles.push(
      <div className="card card-body d-inline-flex mr-4 ml-4 col-md-3">
        <a href="" className="text-dark">
          <h4>{article[i].title}</h4>
          <p>
             <small>{article[i].description}</small>
          </p>
         
        </a>
      </div>
    );
  }
  return (
    <section className="container-fluid p-5">
      <h3 className="container pb-3"> Articles </h3>
      <div className="container">{articles}</div>
    </section>
  );
};

export default Articles;
