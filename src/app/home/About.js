import React from "react";

import Card from "react-bootstrap/Card";

const { meta } = require("./site");

const About = () => {
  return (
    <section id="About" className="container  py-5  align-content-end  ">
      
    
      <div className="container m-2 ">
        <h5 className="">About</h5>
        <h3 className="">{meta.name}</h3>
        <div className="overflow-auto">
          <span className="pr-2 font-weight-bold">Contact:</span>
          <a href={`mailto:${meta.mail}`}>
            <strong>{meta.email}</strong>
          </a>
        </div>
        <p>{meta.description}</p>
      </div>
    </section>
  );
};
/*
<Card className="bg-dark border-0 container card-columns">
        <Card.Img className="col-2 headshot contianer"/>
        <Card.Body>
          <Card.Title>{meta.name}</Card.Title>

          <Card.Text>{meta.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link>Email:</Card.Link>
          <Card.Link href="#">{meta.email}</Card.Link>
        </Card.Body>
      </Card> 

*/
export default About;
