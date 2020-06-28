import React, { Fragment } from "react";
import Nav from "../comps/Nav";

//const { aboutNav } = require("./about.json");

const About = ({ style }) => {
  const content =()=>(<div>prok</div>);
  const nav = [{}];
  return (
    <Fragment>
      <Nav nav={nav} />
      <section className={style.section}>{content}</section>
    </Fragment>
  );
};

export default About;
