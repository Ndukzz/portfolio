import React from 'react'
import AboutMeItems from '../components/AboutMe/AboutMeItems'
import SkillItems from '../components/Skills/SkillItems'
import FunFacts from '../components/FunFacts'
import { useRouteLoaderData } from 'react-router-dom'   // using id's to pull specific data d
import Biography from '../components/AboutMe/Biography'

const AboutPage = () => {
  const { routerSkills} = useRouteLoaderData("data-loader");
  console.log(routerSkills);
  return (
    <>
      <div className="titleNav">
        <h1 className="titles"><span>/</span>about-me</h1>
      </div>
      <p>Who am I?</p>
      <AboutMeItems />
      <Biography />

      {/* THE SKILLS SECTION */}

      <div className="titleNav">
        <h1 className="titles"><span>#</span>skills</h1>
      </div>
      <SkillItems  skills={routerSkills} />

      {/* THE FUN FACTS SECTION */}

      <div className="titleNav">
        <h1 className="titles"><span>#</span>fun-facts</h1>
      </div>
      <FunFacts />
    </>
  )
}

export default AboutPage