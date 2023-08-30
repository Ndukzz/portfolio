import React from 'react'
import classes from "./SkillItems.module.css"

const SkillItems = (props) => {
  return (
    <div className={classes.skillContainer}>
      <div className={classes.skillIcons}>
        {/* THIS IS WHERE ALL THE FLOATING ICONS WILL GO */}
      </div>

      <div className={classes.skillModules}>   
          {/* THIS IS THE LANGUAGES SECTION  */}
        <div className="foldable">
          <section className={classes.skillModule}>
            <h4>Languages</h4>
            <div> 
              {props.data.languages.map((language) => {
                return (language.name + " ")
              })}
            </div>
          </section>
        </div>
          {/* THIS IS THE DATABASES SECTION */}
        <div className={classes.foldable}>              
          <section className={classes.skillModule}>
            <h4>Databases</h4>
            <div> 
              {props.data.databases.map((database) => {
                return (database.name + " ")
              })}
            </div>
          </section>  
             {/* THIS IS THE TOOLS SECTION */}
          <section className={classes.skillModule}>
            <h4>Tools</h4>
            <div> 
              {props.data.tools.map((tool) => {
                return (tool.name + " ")
              })}
            </div>
          </section>
        </div>
          {/* THIS IS THE FRAMEWORKS SECTION */}
        <div classaname={classes.foldable}>
          <section className={classes.skillModule}>
            <h4>Frameworks</h4>
            <div> 
              {props.data.frameworks.map((framework) => {
                return (framework.name + " ")
              })}
            </div>
          </section>
            {/* THIS IS THE OTHERS SECTION */}
          <section className={classes.skillModule}>
            <h4>Others</h4>
            <div> 
              {props.data.others.map((other) => {
                return (other.name + " ")
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default SkillItems