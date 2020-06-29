import React from "react";

const { media } = require("../home/site.json");

const Footer = () => (
  <div className="container-fluid m-0 p-0 d-flex vh-100 align-items-center sticky-top brprime order-1 order-lg-4 col-1">
    <ul className="container text-left  ml-0 px-0 pb-5 mb-5 mr-auto">
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
