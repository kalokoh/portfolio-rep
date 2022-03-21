import React, {useContext} from "react";
import photo from "../Assest/photo_Alie kalokoh.jpg";
import classes from "./About.module.css";
import contextProvider from '../ContextContainer/Context'

const About = () => {
  const context = useContext(contextProvider)
  return (
    <div className={classes["about-container"]}>
      <h1>About Me</h1>
      <div className={classes.about}>
        <div className={classes["photo-container"]}>
          <img src={photo} alt="profile" />
        </div>
        <div className={classes.content}>
          <p>
            My name is Alie Kalokoh. I am a front-end developer and also a teacher at AL-Furqan secondary school and Tusakay pre and high school. 
          </p>
          <p>Skills</p>
          <ul>
            <li>Hyper Text Markup Language (HTML)</li>
            <li>Cascading Style Sheet (CSS)</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Microsoft Word</li>
            <li>Microsoft PowerPoint</li>
          </ul>
          <div className={classes.buttons}>
            <button className={classes.btn} onClick={context.scrollToContact}>Hire Me</button>
            <button className={classes.btn} onClick={context.scrollToResume}>Get Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
