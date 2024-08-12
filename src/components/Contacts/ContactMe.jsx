import React from 'react'
import classes from "./ContactMe.module.css" 

import Contact from './Contact';

const ContactMe = () => {

  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles"><span>{"</>"}</span>contact-me</h1>
        <div className="line"></div>
      </div>
      <Contact />
    </div>
  )
}

export default ContactMe