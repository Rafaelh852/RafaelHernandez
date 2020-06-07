import React from "react";

function Header(props) {
  const site = props.props.props;


  return (
    <header className = "container col-10">
      <h2>{site.name}</h2>
      <h3> {site.slogan} </h3>
      <p>{site.description}</p>
    </header>
  );
}

export default Header;
