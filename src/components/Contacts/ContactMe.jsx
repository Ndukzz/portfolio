import React from 'react'
import classes from "./ContactMe.module.css" 

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const ContactMe = () => {
  const arrow = "~~>"

  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles"><span>#</span>contact-me</h1>
        <div className="line"></div>
        <a href="">View all {arrow}</a>
      </div>
      <section className={classes.content}>
        <p className={classes.outro}>
          I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
        </p>
        <div className={classes.box}>
          <p className={classes.message}>Message me here</p>
          <p className={classes.contacts}>
            <FontAwesomeIcon icon={['fas', 'envelope']} size="2x" />          
            ndukz.codez@gmail.com
          </p>
          <p className={classes.contacts}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />          
            linkedin
          </p>
        </div>
      </section>
    </div>
  )
}

export default ContactMe