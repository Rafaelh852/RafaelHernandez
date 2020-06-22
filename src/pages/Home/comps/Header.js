import React from "react";
import Content from "../content/Home";
/*  
col-12 col-md-9 col-lg-9 col-xl-9 
d-inline-block float-right
*/

function Header() {
  return (
    <header
      id="Header"
      className="bg-dark text-white container-fluid headerheaight row align-items-center justify-content-center p-0 m-0"
    >
      <div class="rain headerheaight  position-absolute container opa maw-960 "></div>
      <div className=" ">
        <h2 className=" col ">{Content.name}</h2>
        <h4 className="col">{Content.slogan}</h4>
      </div>
    </header>
  );
}

export default Header;
