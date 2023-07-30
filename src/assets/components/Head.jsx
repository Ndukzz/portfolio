import Nav from "./Nav"
import classes from "./Head.module.css" 

const Head = () => {
  return (
    <div>
      <Nav />

      <div className={classes.intro}>
        <div className={classes.text}>
          <h2>Ndukz is a <span>Web Designer</span> and <span>Front-end developer</span></h2>
          <p>He crafts responsive websites where Technology meets creativity.</p>
          <button className='button'>Contact me!</button>
        </div>
      </div>
    </div>
  )
}

export default Head