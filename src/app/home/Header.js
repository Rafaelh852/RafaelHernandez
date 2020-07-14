import React from "react";
const { meta } = require("./site.json");
/*  
col-12 col-md-9 col-lg-9 col-xl-9 
d-inline-block float-right
*/

const Header = () => {
  return (
    <header
      id="Header"
      className=" text-white row container-fluid  align-items-center p-0 m-0 headerheight"
    >
     
      <div className="container ">
        <h2 className=" col ">{meta.name}</h2>
        <h4 className="col">{meta.slogan}</h4>
      </div>
    </header>
  );
};

export default Header;
