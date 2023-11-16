import React from "react";

import classes from "./AboutMeItems.module.css";

const AboutMeItems = () => {
  const arrow = "->";

  return (
    <>
      <section className={classes.bio}>
        <div className={classes.bioText}>
          Hello,
          <br />
          <p>
            I'm Chukwuebuka Ndukwe, a self taught Front-end Developer with a
            love for crafting efficient, scalable, and innovative solutions.
            With 3 years of experience in the industry, I thrive on turning
            complex problems into simple, elegant, and user-friendly
            applications. I am a fusion of Nigerian Heritage and American
            Innovation. Born and raised in Nigeria, I bring a unique perspective
            to my work, fusing vibrant aesthetics and functional design from
            scratch and raising them into modern user friendly Web experiences.
          </p>
        </div>
        <img
          src="https://sparkling-crepe-b49b71.netlify.app/images/pic2.jpg"
          alt="my image"
        />
      </section>

      
    </>
  );
};

export default AboutMeItems;
