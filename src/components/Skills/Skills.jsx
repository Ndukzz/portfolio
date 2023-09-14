import React from 'react'
import SkillItems from "./SkillItems"

const Skills = () => {

  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles"><span>#</span>skills</h1>
        <div className="line"></div>
      </div> 
      <SkillItems />
    </div>
  )
}

export default Skills