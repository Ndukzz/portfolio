import React, { useContext } from "react";
import axios from "axios";
import PortContext from "../store/portfolio-ctx"

import Head from "../components/Head";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/Contacts/ContactMe";
import Quote from "../components/UI/Quote"

const Homepage = () => {
  const portCtx = useContext(PortContext)
  const skills = portCtx.skills
  console.log(skills.frameworks);
  let content

  if (portCtx.projects[0] !== undefined && portCtx.skills.frameworks !== undefined) {
    content = <>
      <Projects />
      <Skills />
      <AboutMe />
      <ContactMe />
    </>
  }
  
  return (
    <div className="container">
      <Head />
      <Quote />
      {content}
    </div>
  );
};

export default Homepage;
