import React, { Fragment } from "react";

function Header() {
  return (
    <Fragment>
      <header className="bg-dark">
        <h2 className="text-primary ">{site.name}</h2>
        <h3 className="text-secondary "> {site.slogan} </h3>
      </header>
    </Fragment>
  );
}

export default Header;
