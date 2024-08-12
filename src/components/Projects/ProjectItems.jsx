import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import "./../../App.css";

import PortContext from "../../store/portfolio-ctx";
import classes from "./ProjectItems.module.css";
import { loader } from "../../pages/ProjectsPage";

const ProjectItems = (props) => {
  let content;
  const liveSymbol = "</";
  const projects = useLoaderData();
  console.log(projects);

  if (props.size === "fullPage") {
    content = (
      <>
        <div className={classes.projectItems}>
          {projects.map((project) => {
            return (
              <div key={project.id} className={classes.projectItem}>
                <a target="_blank" href={`${project.live_url}`}>
                  <img
                    className={classes.projectImg}
                    src={project.image}
                    alt="Some random photo"
                  />
                </a>{" "}
                <div className={classes.tools}>
                  {project.tools.map((tool) => {
                    return tool + " ";
                  })}
                </div>
                <section className={classes.descriptionBox}>
                  <p className={classes.projectTitle}>{project.title}</p>
                  <p>{project.description}</p>
                  <div className="LiveButton">
                    <a
                      className="hoverText"
                      target="_blank"
                      href={project.live_url}
                    >
                      Live {liveSymbol}
                    </a>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </>
    );
  } else if (props.size === "miniPage") {
    content = (
      <>
        <div className={classes.projectItems}>
          {/* {props.projects.slice(0, 3).map((project) => {    // got the data loaded from the Homepage */}
          {props.projects
            .slice(props.projects.length - 3, props.projects.length)
            .map((project) => {
              // got the data loaded from the Homepage
              return (
                <div key={project.id} className={classes.projectItem}>
                  <a target="_blank" href={`${project.live_url}`}>
                    <img
                      className={classes.projectImg}
                      src={project.image}
                      alt="Some random photo"
                    />
                  </a>
                  <div className={classes.tools}>
                    {project.tools.map((tool) => {
                      return tool + " ";
                    })}
                  </div>
                  <section className={classes.descriptionBox}>
                    <p className={classes.projectTitle}>{project.title}</p>
                    <p>{project.description}</p>
                    <div className="LiveButton">
                      <a
                        className="hoverText"
                        target="_blank"
                        href={project.live_url}
                      >
                        Live {liveSymbol}
                      </a>
                    </div>
                  </section>
                </div>
              );
            })}
        </div>
      </>
    );
  }

  return <>{content}</>;
};

export default ProjectItems;
