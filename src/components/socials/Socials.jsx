import React from "react";
import classes from "./Socials.module.css"

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
  return <p className={classes.socialLinks}>
    <a href="https://github.com/Ndukzz" target="_blank" rel="noopener noreferrer" className={classes.link}>
      <FontAwesomeIcon icon={["fab", "github"]} className={classes.icon}/>
    </a>

    <a href="https://www.linkedin.com/in/chukwuebuka-ndukwe-6a962721a/" target="_blank" rel="noopener noreferrer" className={classes.link}>
      <FontAwesomeIcon icon={["fab", "linkedin"]} className={classes.icon}/>
    </a>

    <a href="https://x.com/Ndukz__" target="_blank" rel="noopener noreferrer" className={classes.link}>
      <FontAwesomeIcon icon={["fab", "x-twitter"]} className={classes.icon}/>
    </a>
</p>;
};

export default Socials;
