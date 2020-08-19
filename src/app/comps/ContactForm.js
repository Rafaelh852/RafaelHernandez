import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Form as Forms, Container } from "react-bootstrap";

const { meta } = require("../home/site.json");

const email = meta.email;

function ContactForm() {
  return (
    <Container>
      <Formik
        initialValues={{ Name: "", message: "", email: "", subject: "" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          window.open(
            `mailto:${email}?subject=${data.subject}&body= FROM ${data.Name}%0D%0A AT ${data.email}%0D%0A ${data.message}`
          );
          setSubmitting(false);
        }}
      >
        {(values, isSubmitting) => (
          <Form as={Forms}>
            <Forms.Group>
              <Forms.Label>Your Name (required)</Forms.Label>
              <Field
                as={Forms.Control}
                placeholder="Name"
                name="Name"
                required
              />
            </Forms.Group>
            <Forms.Group>
              <Forms.Label>Your Email (required)</Forms.Label>
              <Field
                as={Forms.Control}
                placeholder="Email"
                name="email"
                type="email"
                required
              />
            </Forms.Group>
            <Forms.Group>
              <Forms.Label>Subject</Forms.Label>
              <Field as={Forms.Control} placeholder="" name="subject" />
            </Forms.Group>
            <Forms.Group>
              <Forms.Label>Your Message</Forms.Label>
              <Field
                as="textarea"
                placeholder="Message"
                name="message"
                className="form-control"
                rows="12"
              />
            </Forms.Group>
            <Button disabled={isSubmitting} type="submit">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
/*

<form action="" className="container col-12 col-sm-12 col-md-7 col-xl-6">
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
*/

export default ContactForm;
