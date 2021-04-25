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
      className="container-fluid  p-0 m-0 headerheight bg-dark  "
    >
      
         <div className= "container text-light z1 d-flex flex-column justify-content-center headerheight bgimg">
          <h2 className="z2">{meta.name}</h2>
          <h4 className="z2">{meta.slogan}</h4>
        </div>
        
      
    </header>
  );
};

export default Header;
