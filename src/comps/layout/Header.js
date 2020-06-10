import React, { Fragment } from "react";

function Header(props) {
  const site = props.props.props;

  return (
    <Fragment>
      <header className="bg-dark  ">
        <h2 className="text-primary  d-inline-block mx-auto">{site.name}</h2>
        <h3 className="text-secondary "> {site.slogan} </h3>
        <p className="text-info">{site.description}</p>
      </header>
    </Fragment>
  );
}

export default Header;
