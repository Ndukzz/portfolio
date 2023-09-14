import React from 'react'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom' 
import ProjectItems from '../components/Projects/ProjectItems'

const ProjectsPage = () => {
  const id  = "fullPage"

  return (
    <div className="section">
      <div className="titleNav">
        <h1 className="titles"><span>#</span>projects</h1>
        <div className="line"></div>
      </div>
      <ProjectItems id={id} />
    </div>
  )
}

export default ProjectsPage