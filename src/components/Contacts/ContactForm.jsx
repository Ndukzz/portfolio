import React from "react";
import { Form } from "react-router-dom";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Form className={classes.emailForm}>
      <div className={classes.contactInfo}>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone Number" />
        <input type="text" placeholder="Subject" />
      </div>
      <div className={classes.contactMessage}>
        < textarea type="text" placeholder="Your Message..." />
        <div className="filledButton buttonWidth">Send Message</div>
        {/* Turn this into a glowing button  and remove the contact area*/}
      </div>
    </Form>
  );
};

export default ContactForm;
