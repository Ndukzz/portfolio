import React from 'react'
import classes from "./ProjectItems.module.css"

const ProjectItems = (props) => {

  const liveSymbol = "<~~>"

  return (
    <div className={classes.projectItems}>
      {props.data.slice(0,3).map(
        (project) => {
          return <div key={project.id} className={classes.projectItem}>
            <img className={classes.projectImg} src="https://www.dice.com/binaries/medium/content/gallery/dice/insights/2015/03/shutterstock_230705539.jpg" alt="Some random photo" />
            <div className={classes.tools}>
              {project.tools.map(tool => {
                return (tool + " ")
              })}
            </div>
            <section className={classes.descriptionBox}>
              <p className={classes.projectTitle}>{project.title}</p>
              <p>{project.description}</p>
              <div>
                <button className='purpleButton'>Live {liveSymbol}</button>
              </div>
            </section>

          </div>
        }
      )}
    </div>
  )
}

export default ProjectItems