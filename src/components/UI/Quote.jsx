import { useState } from "react";
import classes from "./Quote.module.css"

const Quote = () => {

  return (
    <div className={classes.center}>
      <button className={classes.card} >
          <p>"With great power comes great electricity bill."</p>
          <p> - Ndukz</p>
      </button>
    </div>
  );
};

export default Quote;
