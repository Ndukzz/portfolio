import React from 'react'
import AboutMeItems from './AboutMeItems'

const AboutMe = (props) => {
  const arrow = "~~>"

  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles"><span>#</span>about-me</h1>
        <div className="line"></div>
        <a href="">View all {arrow}</a>
      </div>
      <AboutMeItems />

    </div>
  )
}

export default AboutMe