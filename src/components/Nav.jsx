import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav className={classes['nav-bar']}>
        <h1>Ndukz</h1>
        <ul className={classes['nav-list']}>
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
        </ul>
      </nav>
    </header>
  )
}

export default Nav