import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

library.add(fas);

const Nav = () => {
  const [ visibleMenu, setVisibleMenu ] = useState(false)

  return (
    <header>
      <nav className={classes['nav-bar']}>
        <h1>Ndukz</h1>
        { !visibleMenu && <ul className={ !visibleMenu ? classes['nav-list'] : ""} onClick={()=>{setVisibleMenu(false)}}>
          <li><span className={classes.hash}>#</span>
            <NavLink to="/" >
              home
            </NavLink>
          </li>
          <li><span className={classes.hash}>#</span>
            <NavLink to="/projects/:fullPage" >
              works
            </NavLink>
          </li>
          <li><span className={classes.hash}>#</span>
            <NavLink to="/about" >
              about-me
            </NavLink>
          </li>
          <li><span className={classes.hash}>#</span>
            <NavLink to="/contacts" >
              contacts
            </NavLink>
          </li>
        </ul>}
      </nav>
      <div className={classes.menu} onClick={() => {setVisibleMenu(!visibleMenu)}}>
          {<FontAwesomeIcon icon={['fas', "hashtag"]} />}
          Menu
        </div>
    </header>
  )
}

export default Nav