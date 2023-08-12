import React from 'react'
import classes from "./SkillItems.module.css"

const SkillItems = (props) => {
  return (
    <div className={classes.skillContainer}>
      <div className={classes.skillIcons}>
        {/* THIS IS WHERE ALL THE FLOATING ICONS WILL GO */}
      </div>
      <div className={classes.skillModules}>
        <section className={classes.skillModule}>
          <h4>Languages</h4>
          {props.data.languages.map((language) => {
            return language.name
          })}
        </section>
        <section className="skillModule"></section>
        <section className="skillModule"></section>
      </div>
    </div>
  )
}

export default SkillItems