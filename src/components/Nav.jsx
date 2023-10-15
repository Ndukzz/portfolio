import classes from './Nav.module.css'
import NavigationLinks from './NavigationLinks'

const Nav = () => {
  return (
    <header>
      <nav className={classes['nav-bar']}>
        <h1>Ndukz</h1>
        <NavigationLinks />
      </nav>
    </header>
  )
}

export default Nav