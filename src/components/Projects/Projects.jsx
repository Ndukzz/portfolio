import ProjectItems from "./ProjectItems"

const Projects = (props) => {

  const arrow = "~~>"

  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles"><span>#</span>projects</h1>
        <div className="line"></div>
        <a href="">View all {arrow}</a>
      </div>
      <ProjectItems data={props.data} />
    </div>
  )
}

export default Projects