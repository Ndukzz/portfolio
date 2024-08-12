import ProjectItems from "./ProjectItems";
// import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const Projects = (props) => {
  const arrow = "~";
  const code = "</>";

  return (
    <div className="section">
      <div className="linkNav">
        <div className="titleNav">
          <h1 className="titles">
            <span>{code} </span>projects
          </h1>
          <div className="line"></div>
        </div>
        <div className="LiveButton">
          <Link to="/projects" className="projLink">
            View 
            {arrow}
          </Link>
        </div>
        {/* link to the "?pageSize=fullPage" */}
      </div>
      <ProjectItems projects={props.projects} size="miniPage" />
    </div>
  );
};

export default Projects;
