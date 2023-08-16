import React from 'react'
import classes from "./ContactMe.module.css" 

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
          <p className={classes.contacts}>ebukaemannuel@gmail.com</p>
          <p className={classes.contacts}>linkedin</p>
        </div>
      </section>
    </div>
  )
}

export default ContactMe