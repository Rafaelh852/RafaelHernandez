import React from "react";
import Content from "../content/Home";

function Nav() {
  var links = [];

  /* Loops through */
  for (const [name, link] of Object.entries(Content.Nav)) {
    if (link === null) {
    } else {
      links.push(
        <li className="">
          <a href={link} className="nav-item nav-link nav-fill ">
            {name}
          </a>
        </li>
      );
    }
  }

  return (
    <nav className=" bg-dark sticky-top ">
      <ul className="nav navbar justify-content-end">{links}</ul>
    </nav>
  );
}

export default Nav;
