import React from "react";

import classes from "./ContactMe.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

const Contact = () => {
  return (
    <section className={classes.content}>
      <p className={classes.outro}>
      Thank you for visiting my portfolio! If you'd like to get in touch with me for collaboration, job opportunities, or any inquiries, please feel free to reach out through the following methods:
      </p>
      <div className={classes.box}>
        <p className={classes.message}>Message me here</p>
        <p className={classes.contacts}>
          <FontAwesomeIcon icon={["fas", "envelope"]} />
          ndukz.codez@gmail.com
        </p>
        <a
          className={classes.link}
          href="https://www.linkedin.com/in/chukwuebuka-ndukwe-6a962721a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={classes.contacts}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
            linkedin
          </p>
        </a>
        <a
          className={classes.link}
          href="https://github.com/Ndukzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={classes.contacts}>
            <FontAwesomeIcon icon={["fab", "github"]} />
            Github
          </p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
