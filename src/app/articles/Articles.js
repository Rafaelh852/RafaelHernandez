import React, { Fragment } from "react";
import Nav from "../comps/Nav";

import ReactMarkdown from "react-markdown";

import sampleart from "./sampleart.js";
//const { articlesNav } = require("./articles.json");

const Articles = () => {
  const neb = [{ Articles: "./articles" }];
  return (
    <Fragment>
      <Nav navs={neb} />
      <div id="content" className="container-fluid p-0 textgradlight bg-light ">
        <div className="container pt-5">
          <ReactMarkdown source={sampleart} />
        </div>
      </div>
    </Fragment>
  );
};

// nav links by tags?
// external blog view?

/* --blog main page components--
blog header
tag filter ?
blog timeline
pagination
social media links
recomendations ? 
footer 

-- blog content components--
title view
overview
date and time subheading
title picture view
picture description

par1
par || picture with subview
  or inline par and pic
...
topics
social medial links
other blog recomendations
comment section?
footer

*/

export default Articles;
