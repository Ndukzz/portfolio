import React from 'react'

import Contact from '../components/Contacts/Contact'

const ContactsPage = () => {
  return (
    <>
      <div className="titleNav">
        <h1 className="titles"><span>/</span>contacts</h1>
      </div>
      <p>Who am I?</p>

      {/* THE SKILLS SECTION */}

      <Contact />

      <div className="titleNav">
        <h1 className="titles"><span>#</span>all-media</h1>
        All my media goes here!!
      </div>
    </>
  )
}

export default ContactsPage