import React, { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";

const Navigation = ({ navs }) => {
  //const linkstyle = "nav-item nav-link py-3 px-2 ";
  const linkstyle = " text-center hover";
  const bgc = "bggrad";

  var [toggle, setToggle] = useState(false);

  /* old toggling func
const toggler = (child, parent) => {
    setToggle(!toggle);
    const par = document.getElementById(`P-${parent}`);
    child.map(([cHeading]) => {
      const el = document.getElementById(cHeading);
      if (toggle) {
        //el.classList.add(vanish);
        par.classList.remove(bgc);
      } else {
        //el.classList.remove(vanish);
        par.classList.add(bgc);
      }
    });
  };

*/

  const HandleToggle = (id, toggleclass) => {
    setToggle(!toggle);
    const toggleElement = document.getElementById(id);
    if (toggle) {
      toggleElement.classList.remove(toggleclass);
    } else {
      toggleElement.classList.add(toggleclass);
    }
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
    <Nav id="nav" className="bg-dark container-fluid p-0 sticky-top py-2 ">
      <div className="navcontainer">
        <Nav.Link href="/." className={linkstyle}>
          Home
        </Nav.Link>
        {Object.entries(navs[cycle]).map(([heading, value]) => {
          if (typeof value === "string") {
            return (
              <Nav.Link href={value} className={linkstyle}>
                {heading}
              </Nav.Link>
            );
          }

          if (typeof value === typeof {}) {
            const children = Object.entries(value);

            const child = children.map(([cHeading, cValue]) => (
              <Nav.Item>
                <Nav.Link id={cHeading} href={cValue} className={linkstyle}>
                  {cHeading}
                </Nav.Link>
              </Nav.Item>
            ));

            return (
              <Accordion as="Nav" className="cc p-0">
                <Accordion.Toggle
                  as="div"
                  eventKey={heading}
                  className="nav-item "
                >
                  <Nav.Link
                    href={`#${heading}`}
                    className={linkstyle + " dropdown-toggle  "}
                    id={`P-${heading}`}
                    onClick={() => HandleToggle(`P-${heading}`, bgc)}
                  >
                    {heading}
                  </Nav.Link>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={heading}>
                  <>{child}</>
                </Accordion.Collapse>
              </Accordion>
            );
          }
        })}
        {navs.length > 1 ? (
          <Link
            href="#"
            id=""
            className={linkstyle + " dropdown-toggle nav-link"}
            onClick={CycleNav}
          ></Link>
        ) : (
          ""
        )}
      </div>
    </Nav>
  );
};
//{navNames[cycle]}
export default Navigation;
