import React from 'react'

import classes from "./FunFacts.module.css" 

const textBox = {
    border: '1px solid white',
    padding: '10px',
    width: "fit-content"
  }
const FunFacts = () => {
  return (
    <div className={classes.factsBox}>
      <p style={textBox}>I enjoy watching <span> anime</span></p>
      <p style={textBox}>I am a pro at <span>soccer</span></p>
      <p style={textBox}>I believe <span>music</span> is therapy</p>
      <p style={textBox}>My favorite movie is <span>The Wolf of Wall Street</span></p>
      <p style={textBox}>I am still in <span>college</span></p>
      <p style={textBox}>I have <span>3</span> siblings</p>
    </div>
  )
}

export default FunFacts