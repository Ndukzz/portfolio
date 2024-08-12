import React from 'react'
import SkillItems from "./SkillItems"

const Skills = (props) => {

  const code = "</>"
  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles"><span>{code} </span>skills</h1>
        <div className="line"></div>
      </div> 
      <SkillItems skills={props.skills} />
    </div>
  )
}

export default Skills