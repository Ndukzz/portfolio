import React from "react";

import classes from "./AboutMeItems.module.css";


const AboutMeItems = () => {
  const arrow = '->'

  return (
    <section className={classes.bio}>
      <div className={classes.bioText}>
        Hello,
        <br />
        <p>
          I'm Chukwuebuka Ndukwe, a self taught Front-end Developer with a
          fusion of Nigerian Heritage and American Innovation. Born and raised
          in Nigeria, I bring a unique perspective to my work, fusing vibrant
          aesthetics and functional design from scratch and raising them into
          modern user friendly Web experiences.
        </p>
        <p>
          Now based in the US, I have embraced the spirit of American innovation
          and entrepreneurship. With a deep love for crafting elegant,
          user-centric websites and web applications, I'm on a mission to bring
          functionality to every project I touch.
        </p>
      </div>
      <img src="./images/hacker.png" alt="my image" />
    </section>
  );
};

export default AboutMeItems;
