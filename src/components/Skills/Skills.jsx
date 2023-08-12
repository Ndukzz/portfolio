import React from 'react'
import SkillItems from "./SkillItems"

const Skills = (props) => {

  const arrow = "~~>"

  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles"><span>#</span>skills</h1>
        <div className="line"></div>
        <a href="">View all {arrow}</a>
      </div>
      <SkillItems data={props.data} />
    </div>
  )
}

export default Skills