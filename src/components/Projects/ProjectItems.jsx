import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import PortContext from "../../store/portfolio-ctx"
import classes from "./ProjectItems.module.css"

const ProjectItems = (props) => {

  let content
  const liveSymbol = "~~>"
  const portCtx = useContext(PortContext)
  console.log(portCtx.projects[0]);
  console.log(props.projects);

  if(props.id == "miniPage"){
    content = (
      <>
      <div className={classes.projectItems}>
        {props.projects.slice(0,3).map(
          (project) => {
            return (
              <div key={project.id} className={classes.projectItem}>
                <a href={`${project.live_url}`}>
                  <img className={classes.projectImg} src={project.image} alt="Some random photo" />
                </a>
                <div className={classes.tools}> 
                  {project.tools.map(tool => {
                    return (tool + " ")
                  })}
                </div>
                <section className={classes.descriptionBox}>
                  <p className={classes.projectTitle}>{project.title}</p>
                  <p>{project.description}</p>
                  <div>
                    <button className='purpleButton'>
                      <a target='_blank' href={project.live_url}>Live {liveSymbol}</a>
                    </button>
                  </div>
                </section>
  
              </div>
        )
          }
        )}
      </div>
   </>
    )
  }
  else if(props.id === "fullPage" ) {
    content =(
      <>
      <div className={classes.projectItems}>
        {props.projects.map(
          (project) => {
            return (
              <div key={project.id} className={classes.projectItem}>
                <a href={`${project.live_url}`}>
                  <img className={classes.projectImg} src={project.image} alt="Some random photo" />
                </a>                <div className={classes.tools}> 
                  {project.tools.map(tool => {
                    return (tool + " ")
                  })}
                </div>
                <section className={classes.descriptionBox}>
                  <p className={classes.projectTitle}>{project.title}</p>
                  <p>{project.description}</p>
                  <div>
                  <button className='purpleButton'>
                      <a target='_blank' href={project.live_url}>Live {liveSymbol}</a>
                    </button>
                  </div>
                </section>
  
              </div>
        )
          }
        )}
      </div>
   </>
    )
  }

  return <>
    {content}
  </>
}

export default ProjectItems