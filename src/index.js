import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import View from "./pages/Views";

ReactDOM.render(<View />, document.getElementById("root"));

/* Layout of project
  index // entry point
  pages
    Views.js // controlls page views
    PAGE //page i.e view
      Layout.js // controlls layout view
      comps  // page components
        nav.js 
        ... 
      content // page content
        PAGE.json // written content and structure goes here
        pictures        


    Project .. views


*/
