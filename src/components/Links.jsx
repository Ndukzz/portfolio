import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Links.module.css";

const Links = (props) => {
  let device = props.device;
  const code = "</>"

  const resetHandler = (value) => {
    props.resetMenu(value);
    console.log(value);
  };

  if (device === "desktop") {
    return (
      <div>
        <ul className={classes["desktop-nav-list"]}>
          <li>
            <NavLink
              className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
              to="/"
            >
            <span className={classes.hash}>{code}</span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
              to="/projects"
            >
            <span className={classes.hash}>{code}</span>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
              to="/about"
            >
            <span className={classes.hash}>{code}</span>
              AboutMe
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
              to="/contacts"
            >
            <span className={classes.hash}>{code}</span>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }

  if (device === "mobile") {
    return (
      <div className={props.isVisible ? "" : classes.invisible}>
        <ul
          className={
            device === "mobile"
              ? classes["mobile-nav-list"]
              : classes["desktop-nav-list"]
          }
          onClick={() => {
            resetHandler(false);
          }}
        >
          <li>
            <span className={classes.hash}>{code}</span>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <span className={classes.hash}>{code}</span>
            <NavLink to="/projects/:fullPage">Projects</NavLink>
          </li>
          <li>
            <span className={classes.hash}>{code}</span>
            <NavLink to="/about">AboutMe</NavLink>
          </li>
          <li>
            <span className={classes.hash}>{code}</span>
            <NavLink to="/contacts">Contact</NavLink>
          </li>
        </ul>
      </div>
    );
  }
};

export default Links;
