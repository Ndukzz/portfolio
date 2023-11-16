import classes from "./Head.module.css" 
import { Link } from "react-router-dom" 

const Head = () => {
  return (   
      <div className={classes.intro}>
        <div className={classes.text}>
          <h2>Ndukz is a <span>Mobile </span> and <span>Front-end developer</span></h2>
          <p>He crafts responsive websites where Technology meets creativity.</p>
          <button className='purpleButton'>
            <Link to='/contacts'>
              Contact me!
            </Link>
          </button>
        </div>
        <div className="profilePic">
          <img className={classes.profilePic} src="https://sparkling-crepe-b49b71.netlify.app/images/pic1.jpg" alt="Profile Picture" />
      
        </div>
      </div>
  )
}

export default Head