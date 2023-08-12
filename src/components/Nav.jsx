import classes from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={classes['nav-bar']}>
      <h1>Ndukz</h1>
      <ul className={classes['nav-list']}>
        <li><span className={classes.hash}>#</span> home</li>
        <li><span className={classes.hash}>#</span>works</li>
        <li><span className={classes.hash}>#</span>about-me</li>
        <li><span className={classes.hash}>#</span>contacts</li>
      </ul>
    </nav>
  )
}

export default Nav