import React from "react";
import { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Layout from "./Home/Layout";

export default function View() {
  return (
    <Fragment>
      <Layout />
    </Fragment>
  );
}
