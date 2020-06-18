import React from "react";
import Content from "../content/Home";

function Nav() {
  var links = [];

  /* Loops through */
  for (const [name, link] of Object.entries(Content.links)) {
    if (link === null) {
    } else {
      links.push(
        <li className="">
          <a href={link} className="nav-item nav-link">
            {name}
          </a>
        </li>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand sticky-top bg-dark border-bottom">
      <span className="navbar-brand ">
        
      </span>
      <ul className="ml-auto navbar-nav">{links}</ul>
    </nav>
  );
}

export default Nav;
