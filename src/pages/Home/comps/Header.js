import React from "react";
import Content from "../content/Home";

function Header() {
  return (
    <header className="bg-dark container-fluid p-5">
      <h2 className="text-primary container">{Content.name}</h2>
      <h4 className="text-secondary container">{Content.slogan}</h4>
    </header>
  );
}

export default Header;
