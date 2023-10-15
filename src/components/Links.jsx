import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Links.module.css";

const Links = (props) => {
  let device = props.device;

  const resetHandler = (value) => {
    props.resetMenu(value);
    console.log(value);
  };

  if (device === "desktop") {

    return (
      <div>
        <ul
          className={classes["desktop-nav-list"]}
        >
          <li>
            <span className={classes.hash}>#</span>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <span className={classes.hash}>#</span>
            <NavLink to="/projects/:fullPage">works</NavLink>
          </li>
          <li>
            <span className={classes.hash}>#</span>
            <NavLink to="/about">about-me</NavLink>
          </li>
          <li>
            <span className={classes.hash}>#</span>
            <NavLink to="/contacts">contacts</NavLink>
          </li>
        </ul>
      </div>
    );
  }

  if (device === "mobile") {
      return (
        <div
          className={props.isVisible ? "": classes.invisible}
        >
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
              <span className={classes.hash}>#</span>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <span className={classes.hash}>#</span>
              <NavLink to="/projects/:fullPage">works</NavLink>
            </li>
            <li>
              <span className={classes.hash}>#</span>
              <NavLink to="/about">about-me</NavLink>
            </li>
            <li>
              <span className={classes.hash}>#</span>
              <NavLink to="/contacts">contacts</NavLink>
            </li>
          </ul>
        </div>
      );
    }
};

export default Links;
