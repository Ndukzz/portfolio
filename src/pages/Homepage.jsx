import React, { useContext } from "react";
import axios from "axios";
import PortContext from "../store/portfolio-ctx"
import { useLoaderData } from "react-router-dom";

import Head from "../components/Head";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/Contacts/ContactMe";
import Quote from "../components/UI/Quote"
import { json } from "react-router-dom";

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

  const loaderSkills = useLoaderData()
  
  return (
    <div className="container">
      <Head />
      <Quote />
      {content}
    </div>
  );
};

export default Homepage;

export const loader = async () => {
  const response = await axios.get("https://portfolio-cc474-default-rtdb.firebaseio.com/skills.json")
  if (response.status !== 200 || response.data === null) {
    throw json({message: "something went wrong with skills"}, {status: 300})
  } else {
    console.log("Skills: ", response.data);
    return response.data
  }
}