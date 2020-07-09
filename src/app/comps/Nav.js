import React, { useState } from "react";
import { Link } from "react-router-dom";

const { media } = require("../home/site.json");

const Nav = ({ nav }) => {
  //const linkstyle = "nav-item nav-link py-3 px-2 ";
  const linkstyle = "nav-item nav-link  container-fluid text-center hover ";
  const vanish = "vanish";
  const bgc = "bg-info";

  var [toggle, setToggle] = useState(false);

  const toggler = (child,parent) => {
    setToggle(!toggle);
    const par = document.getElementById(parent);
    child.map(([cHeading, cValue]) => {
      const el = document.getElementById(cHeading);
      if (toggle) {
        el.classList.add(vanish);
        par.classList.remove(bgc);
      } else {
        el.classList.remove(vanish);
        par.classList.add(bgc);
      }
    });
  };

  return (
    <nav id="nav" className="container-fluid p-0 ">
      <div className="  bg-dark nav flex-column border">
        <a href="/." className={linkstyle}>
          Home
        </a>

        {Object.entries(nav).map(([heading, value]) => {
          if (typeof value === "string") {
            return (
              <a href={value} className={linkstyle}>
                {heading}
              </a>
            );
          }

          if (typeof value === typeof {}) {
            const children = Object.entries(value);
            const head = (
              <a
                href={`#${heading}`}
                id = {heading}
                onClick={() => toggler(children,heading)}
                className={linkstyle + "text-primary dropdown-toggle"}
              >
                {heading}
              </a>
            );

            return [head].concat(
              children.map(([cHeading, cValue]) => (
                <a id={cHeading} href={cValue} className={linkstyle + vanish}>
                  {cHeading}
                </a>
              ))
            );
          }
        })}
      </div>
    </nav>
  );
};

export default Nav;
