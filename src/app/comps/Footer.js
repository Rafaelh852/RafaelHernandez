import React from "react";

const { media } = require("../home/site.json");

const Footer = () => (
  <div id="media" className="bg-dark nav navbar navbar-collapse fixed-bottom">
    <ul className="container ">
      {Object.entries(media).map(([name, link]) => (
        <li>
          <a href={link} className="nav-item nav-link nav-fill py-3">
            {name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
