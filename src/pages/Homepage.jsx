import React, { useContext } from "react";
import axios from "axios";
import PortContext from "../store/portfolio-ctx";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

import { transformData } from "./ProjectsPage";
import Head from "../components/Head";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/Contacts/ContactMe";
import Quote from "../components/UI/Quote";
import { json } from "react-router-dom";

const Homepage = () => {
  // <---------  useContext  --------->
  const portCtx = useContext(PortContext);
  const skills = portCtx.skills;
  // console.log(skills.frameworks);
  let content;
  
  // <------------  ReactRouter loader  --------->
  const loaderData = useRouteLoaderData("data-loader");     // pulling data using loaders with id's
  const loaderProjects = loaderData.routerProjects
  // console.log(loaderProjects);
  const loaderSkills = loaderData.routerSkills

  // if (
  //   portCtx.projects[0] !== undefined &&
  //   portCtx.skills.frameworks !== undefined
  // ) 
  // {
    content = (
      <>
        { loaderData.routerProjects &&  <Projects projects={loaderProjects} />}
        { loaderData.routerSkills && <Skills skills={loaderSkills} />}
        <AboutMe />
        <ContactMe />
      </>
    );
  // }


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
  let data = {};
  let routerProjects, routerSkills
  const skillsResponse = await axios.get(
    "https://portfolio-cc474-default-rtdb.firebaseio.com/skills.json"
  );
  if (skillsResponse.status !== 200 || skillsResponse.data === null) {
    throw json(
      { message: "something went wrong with skills" },
      { status: 300 }
    );
  } else {
    routerSkills = await transformData(skillsResponse.data, "SKILLS")
    // console.log("Skills: ", routerSkills);
  }

  const projectResponse = await axios.get(
    "https://portfolio-cc474-default-rtdb.firebaseio.com/projects.json"
  );
  if (projectResponse.status !== 200 || projectResponse.data === null) {
    throw json(
      { message: "something went wrong with skills" },
      { status: 300 }
    );
  } else {
    routerProjects = await transformData(projectResponse.data, "PROJECTS")
    // console.log("Projects: ", projectResponse.data);
  }
  return { routerSkills, routerProjects };
};
