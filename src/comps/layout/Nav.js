import React from "react";

function Nav(props) {
  var site = props.props.props;
  var links = [];

  /* Loops through */
  for (const [name, link] of Object.entries(site.links)) {
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
    <nav className="navbar navbar-expand sticky-top navbar-light bg-light">
      <span className="navbar-brand">
          <a href="{site.url}" >{site.title}</a>
        </span>
      <ul className="ml-auto navbar-nav">
        
        {links}
        </ul>
    </nav>
  );
}

export default Nav;
