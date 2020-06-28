import React, { Fragment } from "react";
import Nav from "../comps/Nav";

//const { articlesNav } = require("./articles.json");

const Articles = ({ style }) => {
  const content = () => <div>nov</div>;
  const nav = [{}];
  return (
    <Fragment>
      <Nav nav={nav} />
      <section className={style.section}>{content}</section>
    </Fragment>
  );
};

export default Articles;
