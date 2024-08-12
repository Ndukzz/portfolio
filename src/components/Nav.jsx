import classes from './Nav.module.css'
import NavigationLinks from './NavigationLinks'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <header>
      <nav className={classes['nav-bar']}>
        <Link to="/">Ndukz</Link>
        <NavigationLinks />
      </nav>
    </header>
  )
}

export default Nav