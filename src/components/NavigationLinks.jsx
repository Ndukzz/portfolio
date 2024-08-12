import React, { useState } from 'react'
import classes from "./Nav.module.css"
import Links from "./Links"

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const NavigationLinks = () => {
  const [ visibleMenu, setVisibleMenu ] = useState(false)

  const resetMenu = (value = false) => {
    setVisibleMenu(value)
  }

  return (
    <div>
      <div className={classes.menu} onClick={() => {setVisibleMenu(!visibleMenu)}}>
          {<FontAwesomeIcon icon={['fas', "bars"]} />}
      </div>
      <div className={classes.links}>
          <Links device="desktop" isVisible={visibleMenu} resetMenu={resetMenu} />
          <Links device="mobile" isVisible={visibleMenu} resetMenu={resetMenu} />
      </div>
    </div>
  )
}

export default NavigationLinks