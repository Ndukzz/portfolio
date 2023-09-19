import React from 'react'

import classes from "./ContactMe.module.css" 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const Contact = () => {
  return (
    <section className={classes.content}>
        <p className={classes.outro}>
          I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
        </p>
        <div className={classes.box}>
          <p className={classes.message}>Message me here</p>
            <p className={classes.contacts}>
              <FontAwesomeIcon icon={['fas', 'envelope']} />           
              ndukz.codez@gmail.com
            </p>
          <a href='https://www.linkedin.com/in/chukwuebuka-ndukwe-6a962721a/' target="_blank" rel="noopener noreferrer">
            <p className={classes.contacts}>
              <FontAwesomeIcon icon={['fab', 'linkedin']} />          
              linkedin
            </p>
          </a>
        </div>
      </section>
  )
}

export default Contact