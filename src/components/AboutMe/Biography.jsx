import React from 'react'
import classes from "./AboutMeItems.module.css"

const Biography = () => {
  return (
    <section className={classes.bio}>
    <div className={classes.bioText}>
      <p>
        My journey in software engineering began with a burning curiosity
        and an insatiable appetite for learning. Over the years, I've honed
        my skills in [specific technologies or programming languages, e.g.,
        JavaScript, Typescript, React, ReactNative, Redux, etc.] and have
        actively contributed to a variety of projects ranging from my
        personal projects to the medical field.
        <br />
      </p>
      <p>
        What sets me apart is my relentless pursuit of excellence. I enjoy
        delving into new technologies, staying updated with the latest
        trends, and continuously enhancing my skill set. I firmly believe in
        the power of teamwork and collaboration, having had the pleasure of
        working with diverse teams, each contributing their unique
        perspectives to achieve outstanding results.
      </p>
      <p>
        Besides my technical proficiency, I value creativity, adaptability,
        and the ability to communicate complex ideas simply. I find joy in
        solving puzzles, writing clean and maintainable code, and embracing
        challenges head-on.
      </p>
      <p>
        When I'm not coding, you'll likely find me engaging in soccer
        competitions, in the gym or diving into the world of Anime. I am
        excited about the endless possibilities that technology presents and
        am always eager to take on new challenges. Let's connect and create
        something amazing together!"
      </p>
    </div>
  </section>
  )
}

export default Biography