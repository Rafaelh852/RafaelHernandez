import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ nav }) => {
  return (
    <nav className=" bg-dark col-3 border-right">
      <ul className="justify-content-end text-light ">
        {nav.map(({ link, heading }) => (
          <li className="">
            <Link to={link} className="nav-item nav-link nav-fill ">
              {heading}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
