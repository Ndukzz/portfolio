import React from 'react'

import Contact from '../components/Contacts/Contact'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const ContactsPage = () => {
  return (
    <>
      <div className="titleNav">
        <h1 className="titles"><span>/</span>contacts</h1>
      </div>
      <Contact />

      <div className="titleNav">
        <h1 className="titles"><span>#</span>all-media</h1>
      </div>
      <div>

      </div>
    </>
  )
}

export default ContactsPage