import React from 'react'
import classes from "./SkillItems.module.css"

const SkillItems = (props) => {

  const values = Object.values(props.data)
  console.log(values);

  return (
    <div className={classes.skillContainer}>
      <div className={classes.skillIcons}>
        {/* THIS IS WHERE ALL THE FLOATING ICONS WILL GO */}
      </div>

      <div className={classes.skillModules}>   
{/* THIS IS THE LANGUAGES SECTION  */}
        <section className={classes.skillModule}>
          <h4>Languages</h4>
          <div> 
            {props.data.languages.map((language) => {
              return (language.name + " ")
            })}
          </div>
        </section>
{/* THIS IS THE DATABASES SECTION */}
        <section className={classes.skillModule}>
          <h4>Languages</h4>
          <div> 
            {props.data.languages.map((language) => {
              return (language.name + " ")
            })}
          </div>
        </section>  
{/* THIS IS THE TOOLS SECTION */}
        <section className={classes.skillModule}>
          <h4>Languages</h4>
          <div> 
            {props.data.languages.map((language) => {
              return (language.name + " ")
            })}
          </div>
        </section>
{/* THIS IS THE FRAMEWORKS SECTION */}
        <section className={classes.skillModule}>
          <h4>Languages</h4>
          <div> 
            {props.data.languages.map((language) => {
              return (language.name + " ")
            })}
          </div>
        </section>
{/* THIS IS THE TOOLS SECTION */}
        <section className={classes.skillModule}>
          <h4>Languages</h4>
          <div> 
            {props.data.languages.map((language) => {
              return (language.name + " ")
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default SkillItems