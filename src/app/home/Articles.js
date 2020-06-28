import React from "react";

const { article, link } = require("../articles/articles.json");

const Articles = () => {
  return (
    <section id="Articles" className="container-fluid p-5  ">
      <h3 className="container pb-3 text-light"> Articles </h3>
      <div className="container p-0 m-auto">
        {article.map((article) => (
          <div className="d-inline-block col-12 col-lg-6 col-xl-4 pb-3">
            <a href={article.link}>
              <h4 className="card-title">{article.title}</h4>
              <p className="card-text">{article.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
