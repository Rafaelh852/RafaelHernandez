import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

const Nav = ({ navs, navNames }) => {
  //const linkstyle = "nav-item nav-link py-3 px-2 ";
  const linkstyle = "nav-item nav-link text-center hover ";
  const vanish = "vanish";
  const bgc = "bg-info";

  var [toggle, setToggle] = useState(false);

  const toggler = (child, parent) => {
    setToggle(!toggle);
    const par = document.getElementById(`P-${parent}`);
    child.map(([cHeading]) => {
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

  const [cycle, setCycle] = useState(0);
  const CycleNav = () => {
    const n = navs.length;

    if (cycle + 1 >= n) {
      setCycle(0);
    } else {
      setCycle(cycle + 1);
    }
  };

  return (
    <nav id="nav" className="bg-dark  container-fluid p-0 sticky-top py-2">
      <div className=" container-fluid p-0 ">
        <a href="/." className={linkstyle}>
          Home
        </a>

        {Object.entries(navs[cycle]).map(([heading, value]) => {
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
                id={`P-${heading}`}
                onClick={() => toggler(children, heading)}
                className={linkstyle + "text-primary dropdown-toggle"}
              >
                {heading}
              </a>
            );

            const child = children.map(([cHeading, cValue]) => (
              <a
                id={cHeading}
                href={cValue}
                className={linkstyle + vanish + " dc"}
              >
                {cHeading}
              </a>
            ));

            return [head].concat(child);
          }
        })}

        <Link
          href="#"
          id={""}
          className={linkstyle + " dropdown-toggle"}
          onClick={CycleNav}
        ></Link>
      </div>
    </nav>
  );
};
//{navNames[cycle]}
export default Nav;
