import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ nav }) => {
  return (
    <nav
      id="nav"
      className=" bg-dark container-fluid vh-100 d-flex align-items-center col-4 sticky-top order-2"
    >
      <ul className="container text-right pb-5 mb-5 ">
        {nav.map(({ link, heading }) => (
          <li className="">
            <Link to={link} className="nav-item nav-link nav-fill py-3">
              {heading}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
