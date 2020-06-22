import React from "react";
import Content from "../content/Home";

var Articles = function () {
  var articles = [];
  var article = Content.Aritcles.article;

  for (var i = 0; i < article.length; i++) {
    articles.push(
      <div className="d-inline-block col-12 col-lg-6 col-xl-4 ">
        <a href="" className="">
          <h4 className="card-title">{article[i].title}</h4>
          <p className="card-text">
            {article[i].description}
          </p>
        </a>
      </div>
    );
  }
  return (
    <section id="Articles" className="container-fluid p-5  ">
      <h3 className="container pb-3 text-light"> Articles </h3>
      <div className="container p-0 m-auto">{articles}</div>
    </section>
  );
};

export default Articles;
