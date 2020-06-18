import React from "react";
import Content from "../content/Home";

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

function Footer() {
  return (
    <footer className="container-fluid p-5">
      <h3 className="contianer pb-3">Contact</h3>
      <form action="" className="container col-md-8">
        <div className="formgroup">
          <label for="inputName">Your Name (required)</label>
          <input
            type="text"
            class="form-control mb-3"
            id="inputName"
            placeholder="Name"
            required
          />
        </div>
        <div className="formgroup">
          <label for="inputEmail">Your Email (required)</label>
          <input
            type="email"
            class="form-control mb-3"
            id="inputEmail"
            placeholder="Email"
            required
          />
        </div>
        <div className="formgroup">
          <label for="inputName">Subject</label>
          <input type="text" className="form-control mb-2" id="inputSubject" />
        </div>
        <div className="formgroup">
          <label for="inputName">Your Message</label>
          <textarea
            name="inputMessage"
            id="Message"
            cols="30"
            rows="10"
            className="form-control mb-4"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Send
        </button>
      </form>
    </footer>
  );
}

export default Footer;
