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
      <p style={textBox}>I watch a lot of anime.</p>
      <p style={textBox}>I am a pro at soccer.</p>
      <p style={textBox}>I believe that music is therapy</p>
      <p style={textBox}>My favorite movie is The Wolf of Wall Street</p>
      <p style={textBox}>I am still in school</p>
      <p style={textBox}>I have 3 siblings</p>
    </div>
  )
}

export default FunFacts