import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <div className={classes.flex}>
          <div>NDUKZ</div>
          <div>ebukaemannuel@gmail.com</div>
        </div>
        <p>Web Designer and Frontend Developer</p>
      </div>
      <div className={classes.media}>
        <p>Media</p>
        <ul>
          <li>Git</li>
          <li>Fig</li>
          <li>Twi</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer