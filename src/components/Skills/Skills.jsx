import React from 'react'
import SkillItems from "./SkillItems"

const Skills = (props) => {

  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles"><span>#</span>skills</h1>
        <div className="line"></div>
      </div> 
      <SkillItems skills={props.skills} />
    </div>
  )
}

export default Skills