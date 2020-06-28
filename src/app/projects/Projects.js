import React, { Fragment } from "react";
import Nav from "../comps/Nav";

//const { projectsNav } = require("./projects.json");

const Projects = ({ style }) => {
  const content =()=>(<div>prok</div>);
  const nav = [{}];
  return (
    <Fragment>
      <Nav nav={nav} />
      <section className={style.section}>{content}</section>
    </Fragment>
  );
};

export default Projects;
