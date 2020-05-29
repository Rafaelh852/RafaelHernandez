import React from "react";


function Nav(props) {
  var  site = props.props;
  return (
    <nav>
      <h3><a href="{site.url}">{site.title}</a></h3>
      <h1>{site.name} </h1>
      <ul>
  <li><a href="{site.url}">Home</a></li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

/*class Nav extends ReactComponent {

  function render (){
    return(
      <div>sevenytwwoootwoot</div>
    );
  }

}
*/
export default Nav;
