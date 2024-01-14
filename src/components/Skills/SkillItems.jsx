import React, { useContext } from "react";
import classes from "./SkillItems.module.css";
import PortContext from "../../store/portfolio-ctx";
import { useRouteLoaderData } from 'react-router-dom'

const SkillItems = (props) => {
  const portCtx = useContext(PortContext);
  console.log(portCtx);
  console.log(props.skills);

  const skillLoader = useRouteLoaderData()

  return (
    <div className={classes.skillContainer}>
      <div className={classes.skillIcons}>
        <img
          className={classes.jsLogo}
          src="/images/jslogo.svg"
          alt="Js Logo"
        />
        <img
          className={classes.react}
          src="/images/react.svg"
          alt="react logo"
        />
        <img
          className={classes.tailwindCss}
          src="/images/tailwindCss.svg"
          alt="tailwind logo"
        />
        <img
          className={classes.redux}
          src="/images/redux.svg"
          alt="redux logo"
        />
        <img
          className={classes.python}
          src="/images/python.svg"
          alt="python logo"
        />
        <img
          className={classes.github}
          src="/images/github.svg"
          alt="github logo"
        />
      </div>

      <div className={classes.skillModules}>
        {/* THIS IS THE LANGUAGES SECTION  */}
        <div className={classes.foldable}>
          <section className={classes.skillModule}>
            <h4>Languages</h4>
            <div>
              {portCtx.skills.languages.map((language) => {
                if (language.id !== "MUIIcon") {
                  return language.name + " ";
                }
              })}
            </div>
          </section>
        </div>
        {/* THIS IS THE DATABASES SECTION */}
        <div className={classes.foldable}>
          <section className={classes.skillModule}>
            <h4>Databases</h4>
            <div>
              {portCtx.skills.databases.map((database) => {
                if (database.id !== "MUIIcon") {
                  return database.name + " ";
                }
              })}
            </div>
          </section>
          {/* THIS IS THE TOOLS SECTION */}
          <section className={classes.skillModule}>
            <h4>Tools</h4>
            <div>
              {portCtx.skills.tools.map((tool) => {
                if (tool.id !== "MUIIcon") {
                  return tool.name + " ";
                }
              })}
            </div>
          </section>
        </div>
        {/* THIS IS THE FRAMEWORKS SECTION */}
        <div classaname={classes.foldable}>
          <section className={classes.skillModule}>
            <h4>Frameworks</h4>
            <div>
              {portCtx.skills.frameworks.map((framework) => {
                if (framework.id !== "MUIIcon") {
                  return framework.name + " ";
                }
              })}
            </div>
          </section>
          {/* THIS IS THE OTHERS SECTION */}
          <section className={classes.skillModule}>
            <h4>Others</h4>
            <div>
              {portCtx.skills.others.map((other) => {
                if (other.id !== "MUIIcon") {
                  return other.name + " ";
                }
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SkillItems;
