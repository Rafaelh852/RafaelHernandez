import React from "react";
import Content from "../content/Home";

function Header() {
  return (
    <header className="bg-dark">
      <h2 className="text-primary ">{Content.name}</h2>
      <h3 className="text-secondary ">{Content.slogan}</h3>
    </header>
  );
}

export default Header;
