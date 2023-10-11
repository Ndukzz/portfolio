import React from 'react'
import AboutMeItems from './AboutMeItems'
import { Link } from 'react-router-dom'

const AboutMe = (props) => {
  const arrow = "~~>"

  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles"><span>#</span>about-me</h1>
        <div className="line"></div>
      </div>
      <AboutMeItems />
      <Link to="/about">
        <button className='purpleButton'>Read More {arrow}</button>
      </Link>

    </div>
  )
}

export default AboutMe