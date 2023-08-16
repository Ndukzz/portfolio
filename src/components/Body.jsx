import Head from "./Head"
import classes from "./Body.module.css"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"
import AboutMe from "./AboutMe/AboutMe"
import ContactMe from "./Contacts/ContactMe"
import Footer from "./Footer"

// import Quote from "./UI/Quote"

const Body = (props) => {
  return (
    <>
      <div className="container">
        <Head />
        {/* <Quote /> // make the quote whebn you have spare time*/}
        <Projects data={props.data.projects} />
        <Skills data={props.data.skills} />
        <AboutMe data={props.data} />
        <ContactMe />
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
      <div style={{
        border: "1px solid #ABB2BF"
      }}></div>
      <div className="container">
        <Footer />
      </div>
    </>
  )
}

export default Body