import React from "react";

import classes from "./ContactMe.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./ContactForm";

library.add(fas);

const Contact = () => {
  return (
    <section className={classes.content}>
      <ContactForm />
      <p className={classes.outro}>
      Thank you for visiting my portfolio! If you'd like to get in touch with me for collaboration, job opportunities, or any inquiries, please feel free to reach out through the following methods:
      </p>
    </section>
  );
};

export default Contact;
