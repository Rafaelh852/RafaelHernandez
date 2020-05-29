import React from "react";

function Header(props) {
  const site = props.props;
  return (
    <header>
      <h1>{site.name}</h1>
      <h2> I can make that complicated for you </h2>
      <p></p>
    </header>
  );
}

export default Header;
