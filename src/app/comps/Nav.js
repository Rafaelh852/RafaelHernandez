import React, { useState } from "react";
import { Link } from "react-router-dom";

const { media } = require("../home/site.json");

const Nav = ({ nav }) => {
  const linkstyle = "nav-item nav-link py-3 px-2 ";

  const [view, setView] = useState(true);

  const mediaNav = () => (
    <ul id="media" className=" nav flex-column text-center  align-content-end ">
      {Object.entries(media).map(([name, link]) => (
        <a href={link} className="nav-item nav-link bg-dark py-3">
          <li>{name}</li>
        </a>
      ))}
    </ul>
  );

  return (
    <nav id="nav" className=" fixed-top p-0 m-0 m-auto container-fluid ">
      <div className="container-fluid p-0 bg-dark brb">
        <div className="container p-0">
          <ul className=" d-flex m-0 p-0 pr-1 justify-content-end">
            {nav.map(({ link, heading }) =>
              heading === "Contact" ? (
                <Link
                  to={link}
                  id="contact"
                  className={linkstyle}
                  onClick={() => setView(!view)}
                >
                  <li className="dropdown-toggle"> {heading}</li>
                </Link>
              ) : (
                <Link to={link} className={linkstyle}>
                  <li>{heading}</li>
                </Link>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="container p-0 ">{view ? "" : mediaNav()}</div>
    </nav>
  );
};
//
export default Nav;
