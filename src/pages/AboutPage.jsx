import React from 'react'
import AboutMeItems from '../components/AboutMe/AboutMeItems'
import SkillItems from '../components/Skills/SkillItems'
import FunFacts from '../components/FunFacts'

const AboutPage = () => {
  return (
    <>
      <div className="titleNav">
        <h1 className="titles"><span>/</span>about-me</h1>
      </div>
      <p>Who am I?</p>
      <AboutMeItems />

      {/* THE SKILLS SECTION */}

      <div className="titleNav">
        <h1 className="titles"><span>#</span>skills</h1>
      </div>
      <SkillItems />

      {/* THE FUN FACTS SECTION */}

      <div className="titleNav">
        <h1 className="titles"><span>#</span>fun-facts</h1>
      </div>
      <FunFacts />
    </>
  )
}

export default AboutPage