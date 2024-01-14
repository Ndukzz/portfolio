import ProjectItems from "./ProjectItems"
// import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Projects = (props) => {

  const arrow = "~~>"

  return (
    <div className="section">
      <div className="linkNav">
        <div className="titleNav">
          <h1 className="titles"><span>#</span>projects</h1>
          <div className="line"></div>
        </div>
        <Link to="/projects">View all </Link>    
        {/* link to the "?pageSize=fullPage" */}
        {arrow}</div>
      <ProjectItems projects={props.projects} size="miniPage" />
    </div>
  )
}

export default Projects