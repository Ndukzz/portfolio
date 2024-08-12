import classes from "./Head.module.css";
import { Link } from "react-router-dom";
import Socials from "./socials/Socials";

const Head = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.text}>
        <h2>
       <span>Chukwuebuka Ndukwe </span>
        </h2>
        <h3>
          I'm a <span>Front-end </span> and<span> Mobile developer</span>
        </h3>
        <p>
          A self taught Front-end Developer with a love for crafting efficient,
          scalable, and innovative solutions.
        </p>
        <Socials />
        <div className={classes.buttons}>
          <div className="filledButton">Hire</div>
          <div className="unfilledButton">Contact</div>
        </div>
      </div>
      <div className="profilePic">
        <img
          className={classes.profilePic}
          src="https://main--sparkling-crepe-b49b71.netlify.app/images/profilePic.jpg"
          alt="Profile Picture"
        />
      </div>
    </div>
  );
};

export default Head;
