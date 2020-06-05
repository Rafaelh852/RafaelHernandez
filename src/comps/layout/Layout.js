import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import Page from "../page/Page";


export default class Layout extends Component {
  render() {
    const site = this.props;
    return (
      <React.StrictMode>
          <Router >
            <switch>
              
            </switch>
        <Nav props={site} />
        <Header props={site} />
        <Body props={site} />
        <Footer props={site} />
      
          <Link to="/Page">oh alright</Link>
        </Router>
      </React.StrictMode>
    );
  }
}
