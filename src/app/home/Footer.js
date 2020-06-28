import React from "react";
import Contact from "../comps/Contact";
/* 
<span>Roscuspace</span>
    <span> Rafel Hernandez</span>
    <ul>
      <li>resume</li>
      <li>email</li>
      <li>linked in</li>
      <li>Git (maybe move up? or exclude?)</li>
      <li>twitter</li>
      <li>medium</li>
    </ul>
*/

const Footer = () => {
  return (
    <footer id="Contact" className="container-fluid p-5 text-light ">
      <h3 className="container pb-3">Contact</h3>
      <Contact />
    </footer>
  );
};

export default Footer;
