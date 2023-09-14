import React, { useContext } from "react";
import axios from "axios";
import PortContext from "../store/portfolio-ctx"

import Head from "../components/Head";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/Contacts/ContactMe";

const Homepage = () => {
  const portCtx = useContext(PortContext)
  let content

  if (portCtx.projects[0] !== undefined && portCtx.skills.languages !== undefined) {
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
      {/* <Quote /> // make the quote whebn you have spare time*/}
      {content}
    </div>
  );
};

export default Homepage;
