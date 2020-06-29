import React from "react";
import ContactForm from "../comps/ContactForm";
/* 
<span>Roscuspace</span>
    <span> Rafel Hernandez</span>
    <ul>
      <li>resume</li>
      <li>email</li>
      <li>linked in</li>
      <li>Git (maybe move up? or exclude?)</li>
      <li>twitter</li>
      <li>medium</li>
    </ul>
*/

const Contact = () => {
  return (
    <section id="Contact" className="container-fluid p-5 text-light ">
      <h3 className="container pb-3">Contact</h3>
      <ContactForm />
    </section>
  );
};

export default Contact;
