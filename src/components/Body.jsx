import Head from "./Head"
import classes from "./Body.module.css"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"
// import Quote from "./UI/Quote"

const Body = (props) => {
  return (
    <div className={classes.body}>
      <Head />
      {/* <Quote /> // make the quote whebn you have spare time*/}
      <Projects data={props.data.projects} />
      <Skills data={props.data.skills} />
      { 
        //  And so the journey begins

        //  Head

        //  Projects

        // Skills

        //  About Me

        // Contact Med

        // Import Footer
      }
    </div>
  )
}

export default Body