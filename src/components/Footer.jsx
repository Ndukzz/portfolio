import classes from "./Footer.module.css"
import Container from "../components/UI/Container"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const Footer = () => {
  return (
    <Container>
      <div className={classes.footer}>
        <div>
          <div className={classes.flex}>
            <div>NDUKZ</div>
            <div>ndukz.codez@gmail.com</div>
          </div>
          <p>Web Designer and Frontend Developer</p>
        </div>
        <div className={classes.media}>
          <p>Media</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={['fab', 'github']}  />          
            </li>
            <li>      
              <FontAwesomeIcon icon={['fab', 'discord']}  />
            </li>
            <li className={classes.link}>      
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Footer