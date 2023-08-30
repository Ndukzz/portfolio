import React, { useEffect, useCallback , useState } from "react";
import axios from "axios";

import Head from "../components/Head";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const Homepage = (props) => {

  // const [projectsData, setProjectData] = useState(null);
  // let loadedProjects = [];
  // let loadedSkills = [];

  // const displayData = () => {
  //   console.log(projectsData);
  // };

  // const fetchData = useCallback(async () => {
  //   const response = await axios.get(
  //     "https://portfolio-cc474-default-rtdb.firebaseio.com/projects.json"
  //   );

  //   try {
  //     if (response.status !== 200) {
  //       throw new Error("Something went wrong");
  //     }
  //     const data = response.data;
  //     console.log(data);
  //     // OFFLOADING THE DATA FROM THE DATABASE
  //     for (const key in data) {
  //       loadedProjects.push({
  //         id: key,
  //         title: data[key].title,
  //         description: data[key].description,
  //         live_url: data[key].live_url,
  //         image: data[key].image,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setProjectData(loadedProjects);
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="container">
      <Head />
      {/* <Quote /> // make the quote whebn you have spare time*/}
      <Projects data={props.data.projects} />
      <Skills data={props.data.skills} />
    </div>
  );
};

export default Homepage;
