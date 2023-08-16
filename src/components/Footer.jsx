import classes from "./Footer.module.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const Footer = () => {
  return (
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
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />          
          </li>
          <li>      
            <FontAwesomeIcon icon={['fab', 'discord']} size="2x" />
          </li>
          <li>      
            <FontAwesomeIcon icon={['fab', 'linkedin']}  size="2x"/>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer