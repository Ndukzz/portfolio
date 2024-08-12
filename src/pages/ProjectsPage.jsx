import { json, useParams, useLoaderData } from "react-router-dom";

import { Link } from "react-router-dom";
import ProjectItems from "../components/Projects/ProjectItems";
import axios from "axios";

const ProjectsPage = () => {
  
  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles">
          <span>#</span>projects
        </h1>
        <div className="line"></div>
      </div>
      <ProjectItems size="fullPage" />
    </div>
  );
};

export default ProjectsPage;

export const loader = async () => {
  const projectResponse = await axios.get(
    "https://portfolio-cc474-default-rtdb.firebaseio.com/projects.json"
  );
  if (projectResponse.status !== 200 || projectResponse.data === null) {
    throw json(
      { message: "something went wrong with skills" },
      { status: 300 }
    );
  } else {
    const routerProjects = await transformData(projectResponse.data, "PROJECTS");
    return routerProjects;
    // console.log("Projects: ", projectResponse.data);
  }
};

 // <-------------------------------------------------------------------------------->

  // <-------  LOGIC TO TRANSFORM THE PULLED DATA ------->
export const transformData = async (array, id) => {
  if (id === "PROJECTS") {
    let data = [];
    for (const key in array) {
      data.push({
        id: key,
        title: array[key].title,
        description: array[key].description,
        live_url: array[key].live_url,
        image: array[key].image,
        tools: Object.values(array[key].tools), //  THIS TRANSFORMS THE TOOLS OBJ TO AN ARRAY
      });
    }
    return data;

  }
  if (id === "SKILLS") {
    let data = {
      databases: [],
      frameworks: [],
      languages: [],
      others: [],
      tools: [],
    };
    for (const key in array) {
      if (array.hasOwnProperty(key)) {
        for (const item in array[key]) {
          data[key].push({
            id: item,
            name: array[key][item].name,
          });
        }
      }
    }
    return data
  }
};