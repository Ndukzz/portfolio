import React from "react";
import { json, useParams, useLoaderData } from "react-router-dom";

import { Link } from "react-router-dom";
import ProjectItems from "../components/Projects/ProjectItems";
import axios from "axios";

const ProjectsPage = () => {
  const projects = useLoaderData()
  console.log(projects);
  const id = "fullPage";

  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles">
          <span>#</span>projects
        </h1>
        <div className="line"></div>
      </div>
      <ProjectItems id={id} />
    </div>
  );
};

export default ProjectsPage;

export const loader = async () => {
  const response = await axios.get(
    "https://portfolio-cc474-default-rtdb.firebaseio.com/projects.json"
  );
  if (response.status !== 200 || response.data === null) {
    throw json({message: "something went wrong "}, {status: 500})
  } else {
    console.log(response);
    return response.data
  }
};
