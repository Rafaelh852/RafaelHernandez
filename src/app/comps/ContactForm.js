import React from "react";

function ContactForm() {
  return (
    <form
      action=""
      className="container col-12 col-sm-12 col-md-7 col-xl-6"
    >
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
  );
}

export default ContactForm;
