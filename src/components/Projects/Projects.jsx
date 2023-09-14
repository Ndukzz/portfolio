import ProjectItems from "./ProjectItems"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Projects = () => {

  const arrow = "~~>"
  const id = "miniPage";

  return (
    <div className="section">
      <div className="linkNav">
        <div className="titleNav">
          <h1 className="titles"><span>#</span>projects</h1>
          <div className="line"></div>
        </div>
        <Link to="/projects/:fullPage">View all </Link>
        {arrow}
      </div>
      <ProjectItems id={id}/>
    </div>
  )
}

export default Projects